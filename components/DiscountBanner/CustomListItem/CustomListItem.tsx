import { Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";

interface Props {
  icon: React.ReactNode;
  heading: string;
  text: string;
}

const CustomListItem: React.FC<Props> = ({ icon, heading, text }) => {
  return (
    <>
      <Flex gap={"16px"} align={"center"}
        justify={{
          base: "center",
          lg: "right"
        }}
      >
        {icon}
        <Heading as={"h3"} color="white">
          {heading}
        </Heading>
      </Flex>
      <Text
        color="white"
        textAlign={{
          base: "center",
          lg: "start"
        }}
        marginRight={{
          base: "0",
          lg: "48px"
        }}
        marginY={"20px"}
        fontSize={{
          base: "primary.mb",
          md: "primary.tb",
          lg: "primary.dt",
        }}
      >
        {text}
      </Text>
    </>
  );
};

export default CustomListItem;
