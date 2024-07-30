import { Center, VStack, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Cursor from "../components/Cursor";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    name: "",
    message: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );
      setFormData({
        email: "",
        subject: "",
        name: "",
        message: "",
      });
      console.log(response.data);
      toast({
        title: "Thanks for reaching out to us!",
        description: "We'll respond to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending email.",
        description: "Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Head
        pageTitle="Contact"
        description="Pluscorp Consulting offers a wide range of consulting services for several industries. We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project. We partner with our clients to develop engaging business strategies, design high quality and scalable solutions, and build rich brand experiences."
      />
      <Nav />
      <Cursor />
      <Center>
        <video alt="Background Video" className="video" autoPlay muted loop>
          <source src="/home-video.mp4" type="video/mp4" />
        </video>

        <VStack>
          <div className="contact-details">
            <p>
              <a href="mailto:support@plusconsulting.in" target="_blank">
                support@plusconsulting.in
              </a>
            </p>
            <p>
              <a href="tel:+917358040770" target="_blank">
                +91 73580 40770
              </a>
            </p>
          </div>
          <Stack direction={["column", "row"]} className="contact-us-component">
            <div className="rectangle contact">
              <img src="/contact.webp" alt="About Us Image 2" />
            </div>
            <div className="contact-us">
              <h1>Contact Us!</h1>
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-input contact-message"
                />
                <button type="submit" className="contact-input contact-submit">
                  Send
                </button>
              </form>
            </div>
          </Stack>
        </VStack>
      </Center>
      <Footer />
    </>
  );
}
