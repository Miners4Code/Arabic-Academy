import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import ACALogo from "@/assets/arab_academy.png";
import AuthenticationStatus from "./AuthenticationStatus";

export default function NavbarMobile() {
  return (
    <Flex
      bg={"aca_primary.400"}
      px={{
        xl: "10",
        base: "2",
      }}
      py={"2"}
    >
      <Box w={"3/12"}>
        <Image src={ACALogo} alt="الاكاديمية العربية للبرمجة" />
      </Box>
      <Box w="6/12">
      </Box>
      <Flex w={"3/12"} justify={"end"} align={"center"} gap={"5"}>
        <AuthenticationStatus />
      </Flex>
    </Flex>
  );
}
