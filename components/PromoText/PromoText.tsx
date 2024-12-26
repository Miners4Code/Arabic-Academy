
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  paragraph: string;
  headingType: "h1" | "h2" | "h3";
  fontType: "primary" | "secondary";
  children?: React.ReactNode;
}

const PromoText: React.FC<Props> = ({
  text, 
  paragraph,
  children,
  headingType,
  fontType,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      textAlign={"center"}
      rounded={{
        base: "tiny",
        md: "normal",
      }}
      paddingTop={{
        base: "10px",
        md: "64px",
        lg: "90px",
      }}
      paddingBottom={{
        base: "10px",
        md: "64px",
        lg: "30px",
      }}
      backgroundColor={"#FFFEFEE5"}
      boxShadow={"0px 1px 20px 1px #00000040"}
    >
      <Heading as={headingType}>{text}</Heading>

      <Text
        fontSize={{
          base: `${fontType}.mb`,
          md: `${fontType}.tb`,
          lg: `${fontType}.dt`,
        }}
        marginX={{
          base: "20px",
          md: "24px",
          lg: "75px",
        }}
        marginY={{
          base: "10px",
          md: "40px",
          lg: "40px",
        }}
        textAlign={"center"}
        fontWeight={"700"}
        lineHeight="35px"
      >
        {paragraph}
      </Text>

      {children}
    </Box>
  );
};

export default PromoText;
