import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";

export default function Home() {
  useEffect(() => {
    const overlay = document.querySelector(".about-mission-overlay");
    if (overlay) {
      overlay.style.opacity = 1;
    }
  }, []);

  return (
    <>
      <Head
        pageTitle="Pluscorp Consulting"
        description="Pluscorp Consulting offers a wide range of consulting services for several industries. We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project. We partner with our clients to develop engaging business strategies, design high quality and scalable solutions, and build rich brand experiences."
      />
      <Nav />

      <Cursor />

      <video alt="Background Video" className="video" autoPlay muted loop>
        <source src="/partner-video.mp4" type="video/mp4" />
      </video>

      <VStack className="about-mission-overlay">
        <div className="home-image-container">
          <img
            src="./pluscorp-logo.png"
            alt="Home Page Pluscorp Logo"
            className="home-image"
          />
        </div>
        <div className="about-us-component">
          <div className="about-us">
            <p
              style={{
                fontSize: "2rem",
                marginBottom: "12px",
              }}
            >
              We Come Up with Efficient Processes for Businesses
            </p>
            <p
              style={{
                fontSize: "5rem",
                marginBottom: "20px",
              }}
            >
              PLUSCORP CONSULTING IS READY TO TAKE YOU HIGHER
            </p>
            <div style={{ lineHeight: "33px" }}>
              Pluscorp Consulting offers a wide range of consulting services for
              several industries. We’ve got the necessary tools and expertise to
              help you grow your business, and learn how to properly manage your
              expansion, or your next project. We partner with our clients to
              develop engaging business strategies, design high quality and
              scalable solutions, and build rich brand experiences.
            </div>
          </div>
          <div />
        </div>
      </VStack>

      <Footer />
    </>
  );
}
