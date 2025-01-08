"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";
import ServerSearchForm from "./serverSearchForm";

export const Filters = () => {
  return (
    <Flex
      mb={"50px"}
      mx={"auto"}
      direction={{
        base: "column-reverse",
        xl: "row",
      }}
      gap={{
        base: "40px",
        xl: "0",
      }}
      justify={"end"}
      align={"center"}
      width={{
        "2xl": "1512px",
        xl: "1248px",
        base: "full",
      }}
    >
      <ServerSearchForm
        placeholder="ابحث عن اداة"
      />
    </Flex>
  );
};
