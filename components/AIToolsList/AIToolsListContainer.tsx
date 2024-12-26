import Heart from "@/icons/Heart";
import HeartFill from "@/icons/HeartFill";
import { Button, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";

export const AIToolsListContainer = ({
  children,
  showFav,
  isLoading,
  searchQuery,
  toggleShowFav,
  handleSearch,
}: {
  children: React.ReactNode;
  showFav: boolean;
  isLoading: boolean;
  searchQuery: string | undefined;
  toggleShowFav: () => void;
  handleSearch: (query: string) => void;
}) => {
  return (
    <>
      <Flex
        mb={"50px"}
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
        <Button
          w={"150px"}
          bg={"white"}
          color={"aca_primary.400"}
          shadow={"0px 1px 10px 1px #00000040"}
          py={"0px"}
          rounded={"2xl"}
          onClick={toggleShowFav}
        >
          المفضلة
          {showFav ? <HeartFill /> : <Heart />}
        </Button>
        <SearchForm
          defaultValue={searchQuery}
          placeholder="ابحث عن اداة"
          onSearch={handleSearch}
          disabled={isLoading}
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
      >
        {children}
      </Grid>
    </>
  );
};
