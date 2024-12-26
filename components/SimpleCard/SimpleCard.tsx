import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Props {
  children?: React.ReactNode;
  text: string;
  src?: string | StaticImageData;
  fontType: "primary" | "secondary" | "another";
}

const SimpleCard: React.FC<Props> = ({ children, text, src, fontType }) => {
  return (
    <Flex direction="column" alignItems="center" marginBottom={"65px"} dir="rtl">
      <Box
        backgroundColor={"aca_primary.400"}
        width={{ lg: "130px", md: "170px", base: "120px" }}
        height={{ lg: "130px", md: "170px", base: "120px" }}
        marginTop={"60px"}
        marginBottom={"40px"}
        marginX={"auto"}
        rounded={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {src && <Image src={src} alt={text} width={60} height={55} />}
      </Box>
      <Text
        fontSize={{
          base: `${fontType}.mb`,
          md: `${fontType}.tb`,
          lg: `${fontType}.dt`,
        }}
        height={"70px"}
        textAlign={"center"}
        marginBottom={"10px"}
      >
        {text}
      </Text>
      {children}
    </Flex>
  );
};

export default SimpleCard;
