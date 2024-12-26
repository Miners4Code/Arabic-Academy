import { Box } from "@chakra-ui/react";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import CoursesSlider from "./CoursesSlider";
import UpcomingSlider from "./UpcomingSlider";
import { Course } from "@/types/courses";

const Products = ({ courses }: { courses: Course[] }) => {
  return (
    <Box
      as={"section"}
      paddingY={{
        base: "50px",
        md: "100px",
        lg: "80xp",
      }}
      paddingX={{
        base: "20px",
        md: "80px",
        lg: "50px",
      }}
    >
      <CoursesSlider>
        {!courses
          ? null
          : courses
              .filter((item) => item.status === "available")
              .map((item: Course) => (
                <Box padding={"4"} key={item.id}>
                  <ProductCard course={item} />
                </Box>
              ))}
      </CoursesSlider>
      <UpcomingSlider>
        {!courses
          ? null
          : courses
              .filter((item) => item.status === "coming_soon")
              .map((item: Course) => (
                <Box padding={"5"} key={item.id}>
                  <ProductCard course={item} />
                </Box>
              ))}
      </UpcomingSlider>
    </Box>
  );
};

export default Products;
