import React from "react";
import { Box } from "@chakra-ui/react";
import AIToolsList from "@/components/AIToolsList/AIToolsList";
import { AIToolsFetchResponse } from "@/types/ai-tools";

const AITools = async () => {
  const result = await fetch(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=1&page_size=12",
    {
      cache: "no-store",
    },
  );
  const response: AIToolsFetchResponse = await result.json();

  return (
    <Box py={"150px"}>
      <AIToolsList initial={response} />
    </Box>
  );
};

export default AITools;
