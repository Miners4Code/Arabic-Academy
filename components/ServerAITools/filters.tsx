"use client";

import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import ServerSearchForm from "./serverSearchForm";
import HeartFill from "@/icons/HeartFill";
import Heart from "@/icons/Heart";

export const Filters = ({
  showFavs,
  toggleShowFav,
}: {
  showFavs: boolean;
  toggleShowFav: () => void;
}) => {
  return (
    <Flex
      my={"50px"}
      mx={"auto"}
      direction={{
        base: "column-reverse",
        xl: "row",
      }}
      gap={{
        base: "40px",
        xl: "0",
      }}
      justify={"space-between"}
      align={"center"}
      width={{
        "2xl": "1512px",
        xl: "1248px",
        base: "full",
      }}
    >
      <Button
        w={"150px"}
        bg={"white"}
        color={"aca_primary.400"}
        shadow={"0px 1px 10px 1px #00000040"}
        py={"0px"}
        rounded={"2xl"}
        onClick={toggleShowFav}
      >
        المفضلة
        {showFavs ? <HeartFill /> : <Heart />}
      </Button>
      <ServerSearchForm placeholder="ابحث عن اداة" />
    </Flex>
  );
};
