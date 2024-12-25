import React from "react";
import { Box } from "@chakra-ui/react";
import AIToolsList from "@/components/AIToolsList/AIToolsList";

const AITools = async () => {
  const response = await fetch(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=1&page_size=8",
    {
      cache: "no-store",
    },
  );
  const { data } = await response.json();

  return (
    <Box py={"150px"}>
      <AIToolsList tools={data} />
    </Box>
  );
};

export default AITools;
