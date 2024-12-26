"use client";
import Carousel from "@/components/Carousel/Carousel";
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
export default function FeedbackCard() {
  const cards = [
    {
      id: "1",
      title: "اسم المستخدم",
      content:
        "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
      month: "نيسان",
      date: " 11, 2023",

      image: "card1.png",
      curve: "curve.png",
    },
    {
      id: "2",
      title: "اسم المستخدم",
      content:
        "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
      date: " 11, 2023",
      month: "نيسان",
      image: "card2.png",
      curve: "curve.png",
    },
    {
      id: "3",
      title: "اسم المستخدم",
      content:
        "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
      date: " 11, 2023",
      month: "نيسان",
      image: "card3.png",
      curve: "curve.png",
    },
  ];
  return (
    <div>
      <Box
        paddingX={{
          base: "16",
          md: "28",
        }}
        my={{
          lg: 20,
          md: 30,
          base: 15,
        }}
      >
        <Carousel
          slidesToShow={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          arrowGaps={{
            base: "-40px",
            md: "-80px",
            lg: "-90px",
          }}
        >
          {cards.map((item) => (
            <Box as={GridItem} key={item.id} padding={"3"}>
              <Card.Root shadow={{ base: "aca_shadow.mb" }} overflow={"hidden"}>
                <Box
                  as="div"
                  backgroundImage={`url(${item.curve})`}
                  backgroundSize="cover"
                  height={{ base: "75px", lg: "119px" }}
                  width={{ base: "250px", lg: "385px" }}
                />

                <Card.Header>
                  <Flex direction="column" alignItems="center" mt="4">
                    <Avatar
                      width={{ base: "80px", lg: "100px" }}
                      height={{ base: "80px", lg: "100px" }}
                      src={item.image}
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
                      {item.title}
                    </Heading>
                  </Flex>
                </Card.Header>

                <Card.Body
                  as={Flex}
                  flexDir="row"
                  paddingX="6"
                  justifyContent="center"
                >
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
                    {item.content}
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
                    <Flex
                      direction="row"
                      alignItems="center"
                      textAlign="left"
                      gap="2"
                    >
                      <Box
                        as="span"
                        color="#723689"
                        fontWeight="400"
                        marginLeft={{ md: "10px" }}
                      >
                        {item.month}
                      </Box>
                      <Box
                        as="span"
                        color="#723689"
                        fontWeight="400"
                        fontSize={{ base: "18px", lg: "18px" }}
                        whiteSpace="nowrap"
                      >
                        {item.date}
                      </Box>{" "}
                    </Flex>

                    <HStack
                      justifyContent={{ base: "flex-end", lg: "left" }}
                      marginRight={{ md: "10px" }}
                    >
                      <Image
                        width="20px"
                        height="20px"
                        src="/star3.png"
                        alt="star1"
                      />
                      <Image
                        width="20px"
                        height="20px"
                        src="/star3.png"
                        alt="star2"
                      />
                      <Image
                        width="20px"
                        height="20px"
                        src="/star3.png"
                        alt="star3"
                      />
                      <Image
                        width="20px"
                        height="20px"
                        src="/star3.png"
                        alt="star4"
                      />
                      <Image
                        width="20px"
                        height="20px"
                        src="/star5.png"
                        alt="star5"
                      />
                    </HStack>
                  </Flex>
                </Card.Footer>
              </Card.Root>
            </Box>
          ))}
        </Carousel>
      </Box>
    </div>
  );
}
