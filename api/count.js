import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cookie from "cookie";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

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

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const client = await connectToDatabase();
      const db = client.db(dbName);
      const collection = db.collection("COUNT_COLLECTION");

      const countDoc = await collection.findOne({ _id: "websiteVisits" });

      const cookies = cookie.parse(req.headers.cookie || "");
      const sessionCookie = cookies.session_id;

      if (!sessionCookie) {
        const sessionId = uuidv4();
        res.setHeader("Set-Cookie", cookie.serialize("session_id", sessionId, {
          maxAge: 900000,
          httpOnly: true,
          path: "/",
        }));

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
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
