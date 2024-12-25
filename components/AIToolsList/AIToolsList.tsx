"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { getAITools } from "@/api/ai-tools";
import AIToolCard from "../AIToolCard/AIToolCard";
import SearchForm from "../SearchForm/SearchForm";
import Heart from "@/icons/Heart";
import HeartFill from "@/icons/HeartFill";

export interface AITool {
  tool_id: number;
  title: string;
  pricing: string[];
  subject: string[];
  tags: string[];
  isFav: boolean;
  imageURL: string;
  description: string;
}

interface AIToolsListProps {
  tools: AITool[];
}

const AIToolsList = ({ tools }: AIToolsListProps) => {
  const [currTools, setCurrTools] = useState<AITool[]>(tools);
  const [error, setError] = useState("");
  const [favList, setFavList] = useState<number[] | null>(null);
  const [showFav, setShowFav] = useState(false);

  const handleToggle = (toolId: number) => {
    if (!favList?.includes(toolId)) {
      setFavList((prev) => [...(prev as number[]), toolId]);
    } else {
      setFavList((prev) =>
        (prev as number[]).filter((currTool) => currTool !== toolId),
      );
    }
  };

  useEffect(() => {
    const storedFavList = localStorage.getItem("fav-list");
    if (storedFavList) setFavList(JSON.parse(storedFavList));
  }, []);

  //useEffect(() => {
  //  getAITools()
  //    .then((response) => {
  //      console.log(response.data);
  //      setCurrTools(response.data.data);
  //    })
  //    .catch(() => {
  //      setError("خطأ اثناء استرجاع البيانات");
  //    });
  //}, []);

  useEffect(() => {
    if (favList === null) {
      // NOTE: to prevent setting the fav-list localStorage item
      // when favList state gets initialized to null
      return;
    } else {
      localStorage.setItem("fav-list", JSON.stringify(favList));
    }
  }, [favList]);

  if (error) {
    return (
      <Box>
        <Text color={"red.500"} textAlign={"center"} mt={"100px"}>
          {error}
        </Text>
      </Box>
    );
  }

  return (
    <>
      <Flex px={"30px"} mb={"50px"} justify={"space-between"}>
        <Button
          w={"150px"}
          bg={"white"}
          color={"aca_primary.400"}
          shadow={"0px 1px 10px 1px #00000040"}
          py={"0px"}
          rounded={"2xl"}
          onClick={() => setShowFav((prev) => !prev)}
        >
          المفضلة
          {showFav ? <HeartFill /> : <Heart />}
        </Button>
        <SearchForm placeholder="ابحث عن اداة" />
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
      >
        {currTools.length > 0 ? (
          showFav ? (
            currTools
              .filter((tool) => favList?.includes(tool.tool_id))
              .map((tool) => (
                <GridItem key={tool.tool_id}>
                  <AIToolCard
                    tool={tool}
                    toggleIsFav={() => handleToggle(tool.tool_id)}
                    isFav={true}
                  />
                </GridItem>
              ))
          ) : (
            currTools.map((tool) => (
              <GridItem key={tool.tool_id}>
                <AIToolCard
                  tool={tool}
                  toggleIsFav={() => handleToggle(tool.tool_id)}
                  isFav={favList?.includes(tool.tool_id)}
                />
              </GridItem>
            ))
          )
        ) : (
          <Text textAlign="center">تحميل...</Text>
        )}
      </Grid>
    </>
  );
};

export default AIToolsList;
