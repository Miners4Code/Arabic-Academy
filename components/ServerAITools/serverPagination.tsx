"use client";

import React, { useEffect } from "react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  totalItems: number;
  pageSize: number;
}

export const ServerPagination: React.FC<PaginationProps> = ({
  page,
  totalItems,
  pageSize,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PaginationRoot
      w={"fit"}
      mx={"auto"}
      my={"100px"}
      page={page}
      count={totalItems}
      pageSize={pageSize}
      onPageChange={(e) => {
        handlePageChange(e.page);
      }}
      rounded={"full"}
    >
      <HStack>
        <PaginationPrevTrigger color={"aca_primary.400"} />
        <PaginationItems color="aca_primary.400" />
        <PaginationNextTrigger color={"aca_primary.400"} />
      </HStack>
    </PaginationRoot>
  );
};
