import { VStack } from "@chakra-ui/react";

import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Head
        pageTitle="Pluscorp Consulting"
        description="Pluscorp Consulting offers a wide range of consulting services for several industries. We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project. We partner with our clients to develop engaging business strategies, design high quality and scalable solutions, and build rich brand experiences."
      />
      <Nav />

      <Cursor />

      <video alt="Background Video" className="video" autoPlay muted loop>
        <source src="/home-video.mp4" type="video/mp4" />
      </video>

      <VStack className="about-mission-overlay">
        <div className="about-us-component">
          <div className="about-us">
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "12px",
              }}
            >
              We Come Up with Efficient Processes for Businesses
            </p>
            <p
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              PLUSCORP CONSULTING
            </p>
            <div>
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
