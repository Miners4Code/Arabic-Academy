import AIToolCardSkeleton from "@/components/AIToolCard/AIToolCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function AIToolsLoading() {
  return (
    <>
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
        <Skeleton w={"150px"} h={"60px"} />
        <Skeleton
          w={{
            base: "300px",
            md: "500px",
          }}
          h={"60px"}
        />
      </Flex>
      <Grid
        templateColumns={{
          "2xl": "repeat(4, 360px)",
          xl: "repeat(3, 400px)",
          md: "repeat(2, 360px)",
          base: "repeat(1, 280px)",
        }}
        justifyContent={"center"}
        gapX={{
          base: 0,
          md: "24px",
        }}
        gapY={{
          base: "50px",
          md: "80px",
          lg: "60px",
        }}
        mx={"auto"}
        px={"20px"}
        mb={"100px"}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <GridItem key={index}>
            <AIToolCardSkeleton />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
