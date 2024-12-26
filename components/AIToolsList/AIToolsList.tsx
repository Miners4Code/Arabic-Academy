"use client";

import React, { useEffect, useState } from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { fetchAITools } from "@/api/ai-tools";
import AIToolCard from "../AIToolCard/AIToolCard";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { AITool, AIToolsFetchResponse } from "@/types/ai-tools";
import { AIToolsListContainer } from "./AIToolsListContainer";
import { Pagination } from "./Pagination";
import AIToolCardSkeleton from "../AIToolCard/AIToolCardSkeleton";

interface AIToolsListProps {
  initial: AIToolsFetchResponse;
}

const AIToolsList = ({ initial }: AIToolsListProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const [page, setPage] = useState(initial.page);
  const [totalItems, setTotalItems] = useState(initial.total_items);
  const [itemsPerPage, setItemsPerPage] = useState(initial.page_size);

  const [currTools, setCurrTools] = useState<AITool[]>(initial.data);
  const [error, setError] = useState("");
  const [favList, setFavList] = useState<number[] | null>(null);
  const [showFav, setShowFav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const resetPath = () => {
    setCurrTools(initial.data);
    push(pathname);
  };

  const handleToggle = (toolId: number) => {
    if (!favList?.includes(toolId)) {
      setFavList((prev) => [...(prev as number[]), toolId]);
    } else {
      setFavList((prev) =>
        (prev as number[]).filter((currTool) => currTool !== toolId),
      );
    }
  };

  const handleSearch = async (query: string | null) => {
    setIsLoading(true);
    try {
      if (!query) {
        resetPath();
        return;
      }
      const result = await fetchAITools(query, 1);
      const response: AIToolsFetchResponse = result.data;
      const params = new URLSearchParams(searchParams);

      params.set("q", query);
      params.delete("page");

      if (result.status === "success") {
        setCurrTools(response.data);
        setPage(1);
        setTotalItems(response.total_items);
        setItemsPerPage(response.page_size);
        push(`${pathname}?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("خطأ اثناء استرجاع البيانات");
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message || "خطأ غير متوقع");
    } finally {
      setIsLoading(false);
    }
  };

  const setPageSearchParam = async (p: number) => {
    setIsLoading(true);

    try {
      const params = new URLSearchParams(searchParams);
      params.set("page", p.toString());
      const query = params.get("q") || "";

      const result = await fetchAITools(query, p);
      const response: AIToolsFetchResponse = result.data;

      if (result.status === "success") {
        setCurrTools(response.data);
        setPage(p);
        push(`${pathname}?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("خطأ اثناء استرجاع البيانات");
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message || "خطأ غير متوقع");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedFavList = localStorage.getItem("fav-list");
    if (storedFavList) setFavList(JSON.parse(storedFavList));
  }, []);

  useEffect(() => {
    if (isMounted) return;

    const params = new URLSearchParams(searchParams);
    const currPage = params.get("page") || "1";
    setPage(parseInt(currPage));

    let q = "";
    if (params.get("q")) {
      q = params.get("q") as string;
    }

    fetchAITools(q, parseInt(currPage))
      .then((response) => {
        setCurrTools(response.data.data);
        setPage(response.data.page);
        setTotalItems(response.data.total_items);
        setItemsPerPage(response.data.page_size);
        setIsMounted(true);
      })
      .catch(() => "خطأ اثناء استرجاع البيانات");
  }, [searchParams, isMounted]);

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
      <AIToolsListContainer
        showFav={showFav}
        isLoading={isLoading}
        searchQuery={searchParams.get("q")?.toString()}
        toggleShowFav={() => setShowFav((prev) => !prev)}
        handleSearch={handleSearch}
      >
        {!isLoading && currTools.length > 0
          ? showFav
            ? currTools
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
            : currTools.map((tool) => (
                <GridItem key={tool.tool_id}>
                  <AIToolCard
                    tool={tool}
                    toggleIsFav={() => handleToggle(tool.tool_id)}
                    isFav={favList?.includes(tool.tool_id)}
                  />
                </GridItem>
              ))
          : Array.from({ length: 12 }).map((_, index) => (
              <GridItem key={index}>
                <AIToolCardSkeleton />
              </GridItem>
            ))}
      </AIToolsListContainer>
      {!showFav && (
        <Pagination
          page={page}
          pageSize={itemsPerPage}
          totalItems={totalItems}
          setCurrPage={setPageSearchParam}
        />
      )}
    </>
  );
};

export default AIToolsList;
