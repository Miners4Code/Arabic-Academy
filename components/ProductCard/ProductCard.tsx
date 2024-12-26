import { Box, Button, Card, Text } from "@chakra-ui/react";
import ProductIconMore from "@/icons/ProductIconMore";
import ProductIconCart from "@/icons/ProductIconCart";
import ComingSoon from "./ComingSoon";
import React from "react";
import { Course } from "@/types/courses";
import PythonIcon from "@/icons/PythonIcon";

interface Props {
  course: Course;
}

const ProductCard: React.FC<Props> = ({ course }) => {
  const leader = course.trainers.find((trainer) => trainer.leader);
  return (
    <Box
      borderRadius={"10px"}
      position={"relative"}
      shadow={"aca_shadow.mb"}
      dir="rtl"
    >
      {course.status === "coming_soon" && <ComingSoon />}
      <Card.Root overflow={"hidden"}>
        <Card.Header
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="aca_tomato.400"
          height={{
            base: "228px",
            md: "280px",
            lg: "286px",
          }}
          position="relative"
        >
          <PythonIcon />
        </Card.Header>
        <Box
          paddingTop={{
            lg: "40px",
            md: "27px",
            base: "19px",
          }}
          paddingBottom={{
            lg: "25px",
            md: "27px",
            base: "6px",
          }}
        >
          <Card.Body
            color={"aca_primary.400"}
            paddingX={{
              base: "26px",
              md: "19px",
              lg: "28px",
            }}
            textAlign={{
              md: "start",
              base: "center",
            }}
          >
            <Box
              display={"flex"}
              gap={"20px"}
              justifyContent={{
                md: "space-between",
                base: "center",
              }}
              pos={"relative"}
            >
              <Text as={"h3"} h={"100px"}>{course.title}</Text>
              {course.status === "available" && (
                <Text
                  as={"span"}
                  fontSize={"22px"}
                  fontWeight={700}
                  left={0}
                >
                  ${course.original_price}
                </Text>
              )}
            </Box>
            <Box paddingBottom={"18px"}>
              <Text>{`${leader?.first_name} ${leader?.last_name}`}</Text>
              <Text>{course.total_duration}</Text>
            </Box>
          </Card.Body>
          <Card.Footer
            display="flex"
            justifyContent="center"
            paddingX={{
              xl: "20px",
              lg: "10px",
              base: "20px",
            }}
          >
            <Button
              width={"50%"}
              height={"55px"}
              bgColor={"aca_cyan.400"}
              _hover={{ bgColor: "aca_cyan.500" }}
              display={"flex"}
            >
              <ProductIconMore />
              اقرأ المزيد
            </Button>
            <Button
              width={"50%"}
              height={"55px"}
              bgColor={"aca_tomato.400"}
              _hover={{ bgColor: "aca_tomato.500" }}
              display={"flex"}
            >
              <ProductIconCart />
              {course.status === "coming_soon" ? "احجز الان" : "شراء"}
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};

export default ProductCard;
