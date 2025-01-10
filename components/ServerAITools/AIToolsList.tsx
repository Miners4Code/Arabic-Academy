"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AIToolCard from "../AIToolCard/AIToolCard";
import { AITool, AIToolsFetchResponse } from "@/types/ai-tools";
import { Filters } from "./filters";
import { ServerPagination } from "./serverPagination";

export default function AIToolsList({
  response,
  page,
}: {
  response: AIToolsFetchResponse;
  page: string;
}) {
  const [showFavs, setShowFavs] = useState(false);
  const [favList, setFavList] = useState<AITool[]>([]);
  const [mounted, setMounted] = useState(false);
  const [invalidateFavs, setInvalidateFavs] = useState(false);

  useEffect(() => {
    console.log("just mounted");
    const list = JSON.parse(localStorage.getItem("ai-tools") as string);
    console.log(list);
    setFavList(list);
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("try parsing");
    if (mounted) {
      localStorage.setItem("ai-tools", JSON.stringify(favList));
    }
    setInvalidateFavs(true);
  }, [favList, mounted]);

  return (
    <>
      <Filters
        showFavs={showFavs}
        toggleShowFav={() => setShowFavs((prev) => !prev)}
      />
      {showFavs &&
        (favList.length > 0 ? (
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
            {favList.map((tool) => (
              <GridItem key={tool.tool_id}>
                <AIToolCard
                  tool={tool}
                  isFav={favList.includes(tool)}
                  setFavList={setFavList}
                />
              </GridItem>
            ))}
          </Grid>
        ) : (
          <p>No tools found.</p>
        ))}
      {!showFavs &&
        (response.data.length > 0 ? (
          <>
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
              {response.data.map((tool) => (
                <GridItem key={tool.tool_id}>
                  <AIToolCard
                    tool={tool}
                    isFav={!!favList.find(item => item.tool_id === tool.tool_id)}
                    setFavList={setFavList}
                  />
                </GridItem>
              ))}
            </Grid>

            <ServerPagination
              page={parseInt(page)}
              pageSize={response.page_size}
              totalItems={response.total_items}
            />
          </>
        ) : (
          <p>No tools found.</p>
        ))}
    </>
  );
}
