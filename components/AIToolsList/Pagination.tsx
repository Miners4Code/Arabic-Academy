import React from "react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { HStack } from "@chakra-ui/react";

interface PaginationProps {
  page: number;
  totalItems: number;
  pageSize: number;
  setCurrPage: (p: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalItems,
  pageSize,
  setCurrPage,
}) => {
  return (
    <PaginationRoot
      w={"fit"}
      mx={"auto"}
      mt={"100px"}
      page={page}
      count={totalItems}
      pageSize={pageSize}
      onPageChange={(e) => {
        setCurrPage(e.page);
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
