import { VStack, Stack, StackDivider } from "@chakra-ui/react";

import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Partner() {
  return (
    <>
      <Head
        pageTitle="Partner With Us"
        description="Pluscorp Consulting offers a wide range of consulting services for several industries. We’ve got the necessary tools and expertise to help you grow your business, and learn how to properly manage your expansion, or your next project. We partner with our clients to develop engaging business strategies, design high quality and scalable solutions, and build rich brand experiences."
      />
      <Nav />

      <video alt="Background Video" className="video" autoPlay muted loop>
        <source src="/home-video.mp4" type="video/mp4" />
      </video>

      <div className="home-container">
        <VStack className="partner-overlay">
          <div className="page-header">Partner With Us</div>
          <Stack
            direction={["column", "row"]}
            divider={<StackDivider borderColor="gray.200" />}
            className="partner-component"
          >
            <div className="partner">
              <h1>Core Methodology</h1>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <span className="li" />
                    Deliver basis Organization requirement and values –
                    Understand the Organization Business, Style, Requirement and
                    Criticality first before scouting
                  </li>
                  <br />
                  <li>
                    <span className="li" />
                    Determined to keep standards high – Maintain Quality of
                    candidates with high strike rate
                  </li>
                  <br />
                  <li>
                    <span className="li" />
                    Solution Based - Tailored recruitment to suit your
                    requirements
                  </li>
                  <br />
                  <li>
                    <span className="li" />
                    Result Focused – Ensure high % success factor
                  </li>
                  <br />
                  <li>
                    <span className="li" />
                    Repeat Business – Maintain high Quality standards
                  </li>
                  <br />
                  <li>
                    <span className="li" />
                    Partnering Approach - 1 point of contact, Pan India
                  </li>
                  <br />
                  <li>
                    <span className="li" />
                    Extensive use of Social media – LinkedIn, Facebook etc
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
