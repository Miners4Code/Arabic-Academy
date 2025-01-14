"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Social } from "../Social/social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  addText?: string;
  order?: { base: string; md: string; lg: string };
}
export const CardWrapper = ({ children, headerLable,addText,order }: CardWrapperProps) => {
  return (
    <Flex>
      <Card.Root shadow="0px 1px 10px 0px #00000040" order={order}>
        <CardHeader paddingX="60px" paddingTop="20px">
          <Heading color="#783BA2" as="h3">{headerLable}</Heading>
          <Heading color="#783BA2" as="h3">{addText}</Heading>
        </CardHeader>
        <CardBody>{children}</CardBody>
        <CardFooter>
          <Social />
        </CardFooter>
      </Card.Root>
    </Flex>
  );
};
