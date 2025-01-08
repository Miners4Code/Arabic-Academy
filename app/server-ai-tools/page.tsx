import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Filters } from "@/components/ServerAITools/filters";
import { AIToolsFetchResponse } from "@/types/ai-tools";
import { ServerPagination } from "@/components/ServerAITools/serverPagination";
import AIToolCard from "@/components/AIToolCard/AIToolCard";

export default async function AIToolsServerPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams["q"] ?? "";
  const page = searchParams["page"] ?? "1";

  const result = await fetch(
    `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${page}&page_size=12&search=${query}`,
    {
      cache: "no-store",
    },
  );
  const response: AIToolsFetchResponse = await result.json();

  return (
    <>
      <Filters />
      {response.data.length > 0 ? (
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
              <AIToolCard tool={tool} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <p>No tools found.</p>
      )}
      <ServerPagination
        page={parseInt(page as string)}
        pageSize={response.page_size}
        totalItems={response.total_items}
      />
    </>
  );
}
