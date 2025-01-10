import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import { Box } from "@chakra-ui/react";
import { Review } from "@/types/reviews";
import FeedbackCard from "./FeedbackCard";

interface FeedbackCarouselProps {
  reviews: Review[];
}

export default function FeedbackCarousel({ reviews }: FeedbackCarouselProps) {
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
          {reviews.map((review, idx)=> (
            <FeedbackCard key={idx} review={review} />
          ))}
        </Carousel>
      </Box>
    </div>
  );
}
