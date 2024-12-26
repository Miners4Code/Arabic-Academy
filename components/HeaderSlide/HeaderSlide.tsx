import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";

interface Props {
  slide_data: {
    background: string;
    description: string;
    sub_description1: string;
    sub_description2: string;
  };
  children?: React.ReactNode;
}

const HeaderSlide: React.FC<Props> = ({ slide_data, children }) => {
  return (
    <Box
      bgImage={`url(${slide_data.background})`}
      backgroundPosition={{ base: "center", lg: "left" }}
      bgRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100vh"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
    >
      <Box
        position="absolute"
        inset={0}
        width="100%"
        height="100%"
        bgColor="#783BA242"
        zIndex={1}
      />
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
        }}
        textAlign={{
          base: "center",
          md: "center",
          lg: "right",
        }}
        gap={{ lg: "200px", base: "0px" }}
        top={"50%"}
        translateY={"-50%"}
        zIndex={2}
      >
        <Box
          width={{ lg: "440px", md: "480px", base: "200px" }}
          marginX={{base: "auto", lg: "0"}}
          marginY={{ lg: "auto" }}
          marginBottom={{ base: "55px" }}
        >
          <Heading
            as="h1"
            color={"white"}
            lineHeight={{ lg: "48px", md: "60px", base: "30px" }}
          >
            {slide_data.description}
          </Heading>
        </Box>
        <Box
          width={{ lg: "440px", md: "650px", base: "300px" }}
          marginX={"auto"}
        >
          <Flex
            flexDir={{
              base: "column-reverse",
              md: "column",
            }}
            align={{
              base: "center",
              md: "center",
              lg: "start"
            }}
          >
            <Box marginTop={{ base: "55px", lg: "0" }}>
              <Text as="h3" color={"white"} paddingBottom={"40px"}>
                {slide_data.sub_description1}
              </Text>
              <Text
                as="h3"
                color={"white"}
                marginBottom={{ lg: "80px", md: "30px" }}
              >
                {slide_data.sub_description2}
              </Text>
            </Box>
            {children}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSlide;
