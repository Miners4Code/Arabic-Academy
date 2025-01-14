"use client";
import {
  Box,
  Card,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import React from "react";

interface Review {
  reviewText: string;
  reviewerName: string;
  reviewerLastName: string;
  imageURL: string;
  rating: number;
  date: string;
}

export default function FeedbackCard({ review }: { review: Review }) {
  return (
    <Box as={GridItem} padding={"3"}>
      <Card.Root shadow={{ base: "aca_shadow.mb" }} overflow={"hidden"} h={"400px"}>
        <Box
          as="div"
          backgroundImage={`url(curve.png)`}
          backgroundSize="cover"
          height={{ base: "75px", lg: "119px" }}
          width={{ base: "250px", lg: "385px" }}
        />

        <Card.Header>
          <Flex direction="column" alignItems="center" mt="4">
            <Avatar
              width={{ base: "80px", lg: "100px" }}
              height={{ base: "80px", lg: "100px" }}
              src="card3.png"
              name="Nate Foss"
              position="absolute"
              top={{ base: "25px", lg: "40px" }}
              left="50%"
              translate={"-50% 0"}
              mb="7"
            />
            <Heading
              as="h3"
              textAlign="center"
              color="#723689"
              mt={{ base: "5", lg: "2" }}
              mr={{ lg: "1" }}
              ml={{ base: "2" }}
              width={"131"}
              style={{
                fontWeight: 900,
              }}
            >
              {review.reviewerName} {review.reviewerLastName}
            </Heading>
          </Flex>
        </Card.Header>

        <Card.Body as={Flex} flexDir="row" paddingX="6" justifyContent="center">
          <Card.Description
            mt={{ base: "1", lg: "5" }}
            fontSize={{
              base: "secondary.mb",
              md: "secondary.tb",
              lg: "secondary.dt",
            }}
            fontWeight={{ base: "280", lg: "380" }}
            color="#713488;"
            lineHeight={{ base: "28px", lg: "30px" }}
            textAlign="center"
            width={{ base: "270px", lg: "270px" }}
          >
            {review.reviewText}
          </Card.Description>
        </Card.Body>

        <Card.Footer
          mt="50px"
          paddingRight={{ lg: "2px" }}
          paddingLeft={{ lg: "3px" }}
        >
          <Flex
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDir={{
              base: "column-reverse",
              md: "row",
            }}
            gap={{ base: "3", lg: "1" }}
          >
            <Flex ml={"10px"} direction="row" alignItems="center" textAlign="left" gap="2">
              <Box
                as="span"
                color="#723689"
                fontWeight="400"
                fontSize={{ base: "18px", lg: "18px" }}
                whiteSpace="nowrap"
              >
                {review.date}
              </Box>{" "}
            </Flex>

            <HStack
              justifyContent={{ base: "flex-end", lg: "left" }}
              marginRight={{ md: "10px" }}
            >
              <Image width="20px" height="20px" src="/star3.png" alt="star1" />
              <Image width="20px" height="20px" src="/star3.png" alt="star2" />
              <Image width="20px" height="20px" src="/star3.png" alt="star3" />
              <Image width="20px" height="20px" src="/star3.png" alt="star4" />
              <Image width="20px" height="20px" src="/star5.png" alt="star5" />
            </HStack>
          </Flex>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
}
