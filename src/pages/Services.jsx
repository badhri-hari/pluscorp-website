import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Center } from "@chakra-ui/react";
import Cursor from "../components/Cursor";

export default function Services() {
  const services = [
    {
      name: "Service",
      info: "Service info.",
      detail: "Details for Service.",
    },
    {
      name: "Service",
      info: "Service info.",
      detail: "Details for Service.",
    },
    {
      name: "Service",
      info: "Service info.",
      detail: "Details for Service.",
    },
    {
      name: "Service",
      info: "Service info.",
      detail: "Details for Service.",
    },
    {
      name: "Finance",
      info: "Across Industries.",
      detail: "Details for Finance.",
    },
    {
      name: "Accounting",
      info: "Across Industries.",
      detail: "Details for Accounting.",
    },
    {
      name: "Audit",
      info: "Internal, External, Tax",
      detail: "Details for Auditing.",
    },
    {
      name: "Taxation",
      info: "Direct & Indirect",
      detail: "Details for Taxation.",
    },
    {
      name: "BPO/KPO Staff",
      info: "Domestic and International",
      detail: "Details for BPO/KPO Staff.",
    },
  ];

  return (
    <>
      <Head
        pageTitle="Services"
        description="Pluscorp Consulting offers a wide range of consulting services for several industries. We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project. We partner with our clients to develop engaging business strategies, design high quality and scalable solutions, and build rich brand experiences."
      />
      <Nav />
      <Cursor />
      <video alt="Background Video" className="video" autoPlay muted loop>
        <source src="/home-video.mp4" type="video/mp4" />
      </video>
      <div className="services-heading">
        <h1>Recruitment Services</h1>
        <p>
          We at Pluscorp Consulting are focused on Recruitments in the Finance
          Domain at the moment. We manage hirings from Freshers to CFOs across
          Industries. We intend to start off recruitments for other areas
          shortly.
        </p>
        <br />
        <div>Across all levels (Fresher to CFO)</div>
      </div>
      <Center>
        <div className="members-founders-container">
          {services.map((service, index) => (
            <div key={index} className="members-founders-card">
              <div className="members-founders-card-container">
                <div className="members-founders-card-text-container">
                  <h1>{service.name}</h1>
                  <p>{service.info}</p>
                  <br />
                  <p>{service.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Center>
      <Footer />
    </>
  );
}
