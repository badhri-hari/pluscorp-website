import { VStack, Stack, StackDivider } from "@chakra-ui/react";

import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";

export default function Partner() {
  return (
    <>
      <Head
        pageTitle="Partner With Us"
        description="Pluscorp Consulting offers a wide range of consulting services for several industries. We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project. We partner with our clients to develop engaging business strategies, design high quality and scalable solutions, and build rich brand experiences."
      />
      <Nav />

      <Cursor />

      <video alt="Background Video" className="video" autoPlay muted loop>
        <source src="/home-video.mp4" type="video/mp4" />
      </video>

      <div className="home-container">
        <VStack className="partner-overlay">
          <Stack
            direction={["column", "row"]}
            divider={<StackDivider borderColor="gray.200" />}
            className="partner-component"
            style={{ marginTop: "15px" }}
          >
            <div className="rectangle partner-image2">
              <img src="/home1.webp" alt="About Us Image 2" />
            </div>
            <div className="partner2">
              <h1>Our Mission</h1>
              <p>
                We started this great Venture in 2016. Pluscorp is a sector
                agnostic full service Finance Consulting & Recruitment practice
                that endeavors to exercise original thought to deliver
                meaningful insights that meet and exceed client expectations.
                Our partner driven boutique approach ensures that we constantly
                push the envelope to offer unique and customized solutions that
                put client needs first.
              </p>
              <br />
              <p>
                <strong>About the Founder</strong>: Raghuraman Chandrasekaran
                (aka) Raghu is a Chartered Accountant and a Management
                Accountant by Qualification. He formed Pluscorp Consulting in
                2016 after successful stints in Wipro, ICICI, Satyam, CSC and
                Sutherland spanning to 2 decades. A thorough rounded
                professional with a Six Sigma Greenbelt certification who also
                possesses wide range of experience in multiple Industries like
                Finance, Banking, Treasury, Core Banking, BPO and Audit
                verticals. Very well networked and has managed large teams. He
                has an extensive Outsourcing experience both in Captive and
                Third party environments.
              </p>
            </div>
          </Stack>
          <Stack
            direction={["column", "row"]}
            divider={<StackDivider borderColor="gray.200" />}
            className="partner-component"
          >
            <div className="partner">
              <h1>Core Methodology</h1>
              <div>
                <ul>
                  <li>
                    <strong>
                      Deliver basis Organization requirement and values
                    </strong>{" "}
                    – Understand the Organization Business, Style, Requirement
                    and Criticality first before scouting
                  </li>
                  <br />
                  <li>
                    <strong>Determined to keep standards high</strong> –
                    Maintain Quality of candidates with high strike rate
                  </li>
                  <br />
                  <li>
                    <strong>Solution Based</strong> - Tailored recruitment to
                    suit your requirements
                  </li>
                  <br />
                  <li>
                    <strong>Result Focused</strong> – Ensure high % success
                    factor
                  </li>
                  <br />
                  <li>
                    <strong>Repeat Business</strong> – Maintain high Quality
                    standards
                  </li>
                  <br />
                  <li>
                    <strong>Partnering Approach</strong> - 1 point of contact,
                    Pan India
                  </li>
                  <br />
                  <li>
                    <strong>Extensive use of Social media</strong> – LinkedIn,
                    Facebook etc
                  </li>
                </ul>
              </div>
            </div>
            <div className="rectangle partner-image">
              <img src="/partner.webp" alt="Partner With Us page image" />
            </div>
          </Stack>
        </VStack>
      </div>
      <Footer />
    </>
  );
}
