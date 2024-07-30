import { useState, useEffect } from "react";
import { HStack, Center, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import axios from "axios";

export default function Footer() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 425px)");
  const [visitCount, setVisitCount] = useState(6194);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/count", {
          withCredentials: true,
        });
        const data = response.data;
        setVisitCount(6194 + (data.count || 0));
      } catch (error) {
        console.error("Error fetching visit count:", error);
        setVisitCount(6194);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <>
      <Center className="footer-container">
        <footer>
          {isSmallerScreen ? (
            <>
              <HStack className="glassmorphism-footer" padding={"10px"}>
                <img src="/pluscorp-logo.png" className="footer-logo"></img>
                <VStack>
                  <div className="footer-text-container">
                    Website Visits: {visitCount}
                  </div>
                </VStack>
              </HStack>
              <div className="footer-text-container copyright">
                ©2024 by Pluscorp Consulting Private Limited
              </div>
            </>
          ) : (
            <>
              <HStack className="glassmorphism-footer" padding={"10px"}>
                <img src="/pluscorp-logo.png" className="footer-logo"></img>
                <VStack>
                  <div className="footer-text-container">
                    Website Visits: {visitCount}
                  </div>
                </VStack>
              </HStack>
              <div className="footer-text-container copyright">
                ©2024 by Pluscorp Consulting Private Limited
              </div>
            </>
          )}
        </footer>
      </Center>
    </>
  );
}
