import { Box, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const AIToolCardSkeleton = () => {
  return (
    <Card.Root
      rounded={"none"}
      border={"none"}
      shadow={"lg"}
      w={"full"}
      pos={"relative"}
    >
      <Skeleton h={{ base: "130px", md: "200px" }} />
      <Card.Body gap="2">
        <Card.Title
          dir="ltr"
          color={"aca_primary.400"}
          fontSize={{
            base: "16px",
            md: "23px",
          }}
          fontWeight={"700"}
          mt={"20px"}
          ms={"20px"}
        >
          <SkeletonText noOfLines={1} />
        </Card.Title>
        <Card.Description
          as={Box}
          textAlign={{
            base: "center",
            md: "start",
          }}
          fontSize={{
            base: "14px",
            md: "17px",
          }}
          color={"aca_primary.400"}
          px={"40px"}
          py={"20px"}
        >
          <SkeletonText noOfLines={3} />
        </Card.Description>
      </Card.Body>
      <Card.Footer as={Flex} gap="2" justifyContent={"center"} mb={"15px"}>
        <Skeleton h={"50px"} />
      </Card.Footer>
    </Card.Root>
  );
};

export default AIToolCardSkeleton;
