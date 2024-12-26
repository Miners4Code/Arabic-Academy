"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import CardIcon from "@/icons/CardIcon";
import PythonIcon from "@/icons/PythonIcon";
import JavaIcon from "@/icons/JavaIcon";
import HTMLIcon from "@/icons/HTMLIcon";
import Diamond from "@/icons/Diamond";
import Bootstrap from "@/icons/Bootstrap";
import CSharpIcon from "@/icons/CSharpIcon";
import PHPIcon from "@/icons/PHPIcon";
import CoursesSlider from "./CoursesSlider";
import UpcomingSlider from "./UpcomingSlider";

const Products: React.FC = () => {
  const cources = [
    {
      id: 1,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <CardIcon />,
      soon: false,
      price: 24,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
    {
      id: 2,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <PythonIcon />,
      soon: false,
      price: 24,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
    {
      id: 3,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <JavaIcon />,
      soon: false,
      price: 24,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
    {
      id: 4,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <HTMLIcon />,
      soon: false,
      price: 24,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
  ];

  const upcoming = [
    {
      id: 1,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <Diamond />,
      soon: true,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
    {
      id: 2,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <Bootstrap />,
      soon: true,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
    {
      id: 3,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <CSharpIcon />,
      soon: true,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
    {
      id: 4,
      title: "اسم الكورس",
      trainer: "اسم المدرب",
      icon: <PHPIcon />,
      soon: true,
      courseDetails: {
        vids: 52,
        hours: 24,
        mins: 45,
      },
    },
  ];

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
        {cources.map((item) => (
          <Box padding={"4"} key={item.id}>
            <ProductCard
              soon={false}
              icon={item.icon}
              title={item.title}
              trainer={item.trainer}
              price={item.price}
              courseDetails={item.courseDetails}
            />
          </Box>
        ))}
      </CoursesSlider>
      <UpcomingSlider>
        {upcoming.map((item) => (
          <Box padding={"5"} key={item.id}>
            <ProductCard
              soon={true}
              icon={item.icon}
              title={item.title}
              trainer={item.trainer}
              courseDetails={item.courseDetails}
            />
          </Box>
        ))}
      </UpcomingSlider>
    </Box>
  );
};

export default Products;
