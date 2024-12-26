import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import { Box } from "@chakra-ui/react";
import eduLogo from "@/assets/eduLogo.png";
import bookIcon from "@/assets/bookIcon.png";
import testQuiz from "@/assets/testQuiz.png";
import SimpleCard from "@/components/SimpleCard/SimpleCard";
import ACAButton from "@/components/ACAButton/ACAButton";
import More from "@/icons/More";
import type { StaticImageData } from "next/image";

export const Resources = () => {
  interface CardItem {
    id: string;
    src: string | StaticImageData;
    text: string;
    button: {
      text: string;
      icon?: React.ReactNode;
      bg: "tomato" | "cyan";
      weight: "400" | "500" | "600" | "700" | "900";
      size: "lg" | "md" | "sm";
    };
  }

  const card: CardItem[] = [
    {
      id: "card1",
      src: eduLogo,
      text: "قاموس المصطلحات التقنية",
      button: {
        text: "المزيد...",
        icon: <More />,
        bg: "cyan",
        weight: "900",
        size: "md",
      },
    },
    {
      id: "card2",
      src: bookIcon,
      text: "دروس وانماط الميدجورني",
      button: {
        text: "المزيد...",
        icon: <More />,
        bg: "cyan",
        weight: "900",
        size: "md",
      },
    },
    {
      id: "card3",
      src: testQuiz,
      text: "بنك الأسئلة التقنية",
      button: {
        text: "المزيد...",
        icon: <More />,
        bg: "cyan",
        weight: "900",
        size: "md",
      },
    },
  ];

  return (
    <Box width={"60%"} marginX={"auto"} pos={"relative"}>
      <Box
        pos={"absolute"}
        width={"100%"}
        height={"30px"}
        bg={"red.500"}
        top={"-28px"}
        zIndex={1}
        bgColor={"white"}
        roundedTop={"md"}
      />
      <Box
        pos={"absolute"}
        width={"100%"}
        height={"30px"}
        bg={"red.500"}
        bottom={"-28px"}
        zIndex={1}
        bgColor={"white"}
        roundedBottom={"md"}
      />
      <Box shadow="0px 1px 20px 3px #00000040">
        <Carousel
          slidesToShow={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          arrowGaps={{
            base: "-50px",
            md: "-100px",
            lg: "-200px",
          }}
        >
          {card.map((item) => (
            <Box key={item.id}>
              <SimpleCard text={item.text} src={item.src} fontType="another">
                <ACAButton
                  text={item.button.text}
                  icon={item.button.icon}
                  bg={item.button.bg}
                  weight={item.button.weight}
                  size={item.button.size}
                />
              </SimpleCard>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Resources;
