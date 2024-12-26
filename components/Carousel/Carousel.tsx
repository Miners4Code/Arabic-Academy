"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";

interface Props {
  children: React.ReactNode;
  buttonsColor?: "white" | "primary";
  slidesToShow?: {
    xl?: number;
    lg?: number;
    md?: number;
    base?: number;
  };
  arrowGaps: {
    base: string;
    md: string;
    lg: string;
  };
  width?: {
    base?: string;
    md?: string;
    lg?: string;
  };
}

const Carousel: React.FC<Props> = ({
  children,
  buttonsColor = "primary",
  slidesToShow = {
    base: 1,
    md: 1,
    lg: 1,
    xl: 0,
  },
  arrowGaps,
  width,
}) => {
  return (
    <Box mx={"auto"} width={width}>
      <Slider
        infinite
        speed={500}
        slidesToScroll={1}
        slidesToShow={slidesToShow.xl || slidesToShow.lg}
        responsive={[
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: slidesToShow.lg,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesToShow.md,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToShow.base,
            },
          },
        ]}
        nextArrow={
          <CarouselArrow
            dir="right"
            buttonColor={buttonsColor}
            arrowsGap={arrowGaps}
          />
        }
        prevArrow={
          <CarouselArrow
            dir="left"
            buttonColor={buttonsColor}
            arrowsGap={arrowGaps}
          />
        }
        rtl
      >
        {children}
      </Slider>
    </Box>
  );
};

export default Carousel;
