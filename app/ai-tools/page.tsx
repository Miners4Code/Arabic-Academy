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

  //const [tools, setTools] = useState<[]>([]); // Store tools (all or filtered)
  //const [isSearching, setIsSearching] = useState(false); // Track search state
  //
  //// Fetch and display all AI tools on initial render
  //useEffect(() => {
  //  const fetchAllTools = async () => {
  //    const result = await getAITools();
  //
  //    if (result.status === "success") {
  //      setTools(result.data.data); // Set the initial list of tools
  //    } else {
  //      console.error(result.error);
  //    }
  //  };
  //
  //  fetchAllTools();
  //}, []);
  //
  //// Handle search and fetch filtered tools
  //const handleSearch = async (query: string) => {
  //  if (!query) {
  //    // If the search query is empty, fetch all tools again
  //    setIsSearching(false);
  //    const result = await getAITools();
  //
  //    if (result.status === "success") {
  //      setTools(result.data.data);
  //    } else {
  //      console.error(result.error);
  //    }
  //  } else {
  //    setIsSearching(true);
  //    const result = await searchAITools(query);
  //
  //    if (result.status === "success") {
  //      setTools(result.data.data); // Set the filtered tools
  //    } else {
  //      console.error(result.error);
  //    }
  //    setIsSearching(false); // Stop the loading state after the search is done
  //  }
  //};

  return (
    <Box py={"150px"}>
      <AIToolsList tools={data} />
    </Box>
  );
};

export default AITools;
