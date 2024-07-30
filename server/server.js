import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

let cachedClient = null;

const connectToDatabase = async () => {
  if (
    cachedClient &&
    cachedClient.topology &&
    cachedClient.topology.isConnected()
  ) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    tls: true,
    tlsAllowInvalidCertificates: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (err) {
    console.error("Failed to connect to database", err);
    throw err;
  }
};

app.get("/count", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection("COUNT_COLLECTION");

    const countDoc = await collection.findOne({ _id: "websiteVisits" });

    const sessionCookie = req.cookies.session_id;
    if (!sessionCookie) {
      const sessionId = uuidv4();
      res.cookie("session_id", sessionId, { maxAge: 900000, httpOnly: true });

      const newCount = countDoc ? countDoc.count + 1 : 1;
      await collection.updateOne(
        { _id: "websiteVisits" },
        { $set: { count: newCount } },
        { upsert: true }
      );
      res.status(200).json({ count: newCount });
    } else {
      res.status(200).json({ count: countDoc ? countDoc.count : 0 });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/contact", async (req, res) => {
  const { email, subject, name, message } = req.body;

  const mailOptions = {
    from: email,
    to: "support@plusconsulting.in",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});
