"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Social } from "../Social/social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  addText?: string;
  width?: any;
  order?: { base: number; md: number; lg: number };
}

export const CardWrapper = ({ 
  children, 
  headerLable, 
  addText, 
  width,
  order 
}: CardWrapperProps) => {
  return (
    <Flex width={width || "100%"}>
      <Card.Root 
        shadow="lg"
        order={order}
        w="full"
        mx="auto"
        px={{ base: "4", md: "6", lg: "8" }}
        py={{ base: "4", md: "6" }}
      >
        <CardHeader 
          px={{ base: "4", md: "6", lg: "8" }} 
          pt={{ base: "4", md: "5" }}
          py="10px"
        >
          <Heading 
            color="#783BA2" 
            as="h3"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            {headerLable}
          </Heading>
          {addText && (
            <Heading 
              color="#783BA2" 
              as="h3"
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              mt="2"
            >
              {addText}
            </Heading>
          )}
        </CardHeader>
        <CardBody>{children}</CardBody>
        <CardFooter>
          <Social />
        </CardFooter>
      </Card.Root>
    </Flex>
  );
};