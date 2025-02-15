"use client";

import More from "@/icons/More";
import { Box, Card, Text, Flex, Button } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AITool } from "@/types/ai-tools";
import ACAButton from "../ACAButton/ACAButton";
import HeartFill from "@/icons/HeartFill";
import Heart from "@/icons/Heart";
import Image from "next/image";
import aiToolImg from "@/assets/ai-tool-img.png";

interface AIToolCardProps {
  tool: AITool;
  isFav?: boolean | undefined;
  setFavList: Dispatch<SetStateAction<AITool[]>>;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ tool, isFav, setFavList }) => {
  const [tempFav, setTempFav] = useState(isFav);

  const toggleFav = () => {
    setTempFav(!isFav);
    if (!isFav) {
      setFavList((prev) => [...prev, tool]);
    } else {
      setFavList((prev) => prev.filter((item) => item.tool_id != tool.tool_id));
    }
  };

  return (
    <Card.Root
      rounded={"none"}
      border={"none"}
      shadow={"lg"}
      w={"full"}
      pos={"relative"}
    >
      <Button
        display={"flex"}
        pos={"absolute"}
        top={"15px"}
        left={"15px"}
        w={"50px"}
        h={"50px"}
        justifyContent={"center"}
        alignItems={"center"}
        rounded={"full"}
        shadow={"xl"}
        border={"none"}
        bg={"white"}
        _hover={{
          bg: "gray.50",
        }}
        onClick={toggleFav}
      >
        {tempFav ? <HeartFill /> : <Heart />}
      </Button>
      <Flex
        w={"full"}
        justify={"center"}
        align={"center"}
      >
        <Image src={aiToolImg} width={500} height={250} alt={tool.title} />
      </Flex>
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
          {tool.title}
        </Card.Title>
        <Box dir="ltr" ms={"20px"}>
          {tool.tags.map((tag) => (
            <Text key={tag} display={"inline"} color={"aca_primary.400"}>
              {`${tag} `}
            </Text>
          ))}
        </Box>
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
          <Text h={"75px"}>{tool.description}</Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer as={Flex} gap="2" justifyContent={"center"} mb={"15px"}>
        <ACAButton
          size={"sm"}
          text="المزيد"
          bg="cyan"
          weight="700"
          icon={<More />}
        />
      </Card.Footer>
    </Card.Root>
  );
};

export default AIToolCard;
