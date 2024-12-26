import ACAButton from "@/components/ACAButton/ACAButton";
import Carousel from "@/components/Carousel/Carousel";
import HeaderSlide from "@/components/HeaderSlide/HeaderSlide";
import CustomIcon from "@/icons/Chalkboard";
import { Box } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  const slides = [
    {
      id: "1",
      buttonText: "المسارات التعليمية",
      slideData: {
        background: "/headerImage1.jpg",
        description:
          "تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا",
        sub_description1:
          "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية",
        sub_description2:
          " وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني",
      },
    },
    {
      id: "2",
      buttonText: "المسارات التعليمية",
      slideData: {
        background: "/headerImage1.jpg",
        description:
          "تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا",
        sub_description1:
          "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية",
        sub_description2:
          " وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني",
      },
    },
  ];

  return (
    <Box>
      <Carousel
        arrowGaps={{ base: "30px", md: "70px", lg: "80px" }}
        buttonsColor="white"
      >
        {slides.map((item) => (
          <Box key={item.id} dir="rtl">
            <HeaderSlide slide_data={item.slideData}>
              <ACAButton
                text={item.buttonText}
                icon={<CustomIcon />}
                bg="cyan"
                weight="900"
                size="lg"
              />
            </HeaderSlide>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
