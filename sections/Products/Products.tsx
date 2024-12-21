"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import CoursesSlider from "./CoursesSlider";
import UpcomingSlider from "./UpcomingSlider";

export interface Trainer {
  id: number;
  first_name: string;
  last_name: string;
  leader: boolean;
}

export interface Course {
  id: number;
  title: string;
  imageURL: string;
  total_videos: number;
  total_duration: string;
  original_price: number;
  currency: string;
  status: "available" | "coming_soon";
  trainers: Trainer[];
}

const Products: React.FC = () => {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    fetch("https://sitev2.arabcodeacademy.com/wp-json/aca/v1/courses").then(
      (res) => res.json().then((data) => setCourses(data.courses)),
    );
  }, []);

  console.log(courses);

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
