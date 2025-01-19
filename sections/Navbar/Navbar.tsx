"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ACALogo from "@/assets/arab_academy.png";
import NavLinks from "./NavLinks";
import AuthenticationStatus from "./AuthenticationStatus";

export default function NavbarWide() {
  return (
    <Flex
      bg={"aca_primary.400"}
      px={{
        xl: "10",
        base: "2",
      }}
      py={"2"}
    >
      <Flex
        w={{
          base: "6/12",
          lg: "3/12",
        }}
        align={"center"}
      >
        <Flex
          align="center"
          w={{
            base: "150px",
            md: "auto",
          }}
        >
          <Image src={ACALogo} alt="الاكاديمية العربية للبرمجة" sizes="" />
        </Flex>
      </Flex>
      <Box
        w="6/12"
        display={{
          base: "none",
          lg: "flex",
        }}
        alignItems="center"
        justifyContent={{
          lg: "center",
          base: "end",
        }}
      >
        <NavLinks />
      </Box>
      <Flex
        w={{
          base: "6/12",
          lg: "3/12",
        }}
        justify={"end"}
        align={"center"}
        gap={{
          base: "2",
          md: "5",
        }}
      >
        <Box
          display={{
            base: "block",
            lg: "none",
          }}
        >
          <NavLinks />
        </Box>
        <AuthenticationStatus />
      </Flex>
    </Flex>
  );
}
