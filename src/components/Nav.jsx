import {
  Box,
  HStack,
  Center,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoAtSharp, IoCloseOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header className="header-container">
        <Box className="nav-logo-container nav-logo-blue-background">
          <img
            src="/pluscorp-logo.png"
            className="nav-image"
            alt="Pluscorp Consulting Logo"
          />
        </Box>
        <nav>
          <Center className="glassmorphism-nav">
            <Box onClick={onOpen} className="burger-menu">
              <Center>
                <HamburgerIcon boxSize={30} mt={10} aria-label="Open Menu" />
              </Center>
            </Box>
            <HStack className="nav-hstack" width="100%">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/partner"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                Why Partner With Us?
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                Our Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-links-desktop CTA ${isActive ? "active" : ""}`
                }
              >
                Contact Us
              </NavLink>
              <HStack spacing="0.8rem" className="nav-icons-container-desktop">
                <a href="mailto:support@plusconsulting.in" target="blank">
                  <IoAtSharp
                    color="red"
                    size="2em"
                    className="nav-email-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Email Us!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                  <Tooltip id="my-tooltip" />
                </a>
                <a
                  href="https://www.linkedin.com/company/plus-consulting-india/"
                  target="blank"
                >
                  <FaLinkedin
                    color="#0072b1"
                    size="2em"
                    className="nav-signup-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Visit our LinkedIn Page!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                </a>
                <a
                  href="https://www.instagram.com/pluscorpconsulting/"
                  target="blank"
                >
                  <FaInstagram
                    color="#ff6e6e"
                    size="2em"
                    className="nav-instagram-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Visit our Instagram Page!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                </a>
                <a
                  href="https://www.facebook.com/plusconsultingindia"
                  target="blank"
                >
                  <FaFacebook
                    color="#386cf4"
                    size="2em"
                    className="nav-signup-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Visit our Facebook Page!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                </a>
              </HStack>
            </HStack>
          </Center>
        </nav>

        <Drawer isOpen={isOpen} onClose={onClose} className="drawer">
          <DrawerOverlay />
          <DrawerContent
            bg="#d00000"
            style={{
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <DrawerBody>
              <VStack spacing="2rem">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/partner"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Why Partner With Us?
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Our Services
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Contact Us
                </NavLink>
                <HStack spacing="1rem" className="nav-icons-container-mobile">
                  <a
                    href="mailto:support@plusconsulting.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoAtSharp
                      color="white"
                      size="2em"
                      className="nav-email-container-mobile"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/plus-consulting-india/"
                    target="blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin
                      color="white"
                      size="2em"
                      className="nav-signup-container-mobile"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/pluscorpconsulting/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      color="white"
                      size="2em"
                      className="nav-instagram-container-mobile"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/plusconsultingindia"
                    target="blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      color="white"
                      size="2em"
                      className="nav-signup-container-mobile"
                    />
                  </a>
                </HStack>
              </VStack>
            </DrawerBody>
            <Center mt={40}>
              <IoCloseOutline onClick={onClose} size="3em" />
            </Center>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
}
