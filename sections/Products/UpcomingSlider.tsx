import Carousel from "@/components/Carousel/Carousel";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UpcomingSlider = ({ children }: Props) => {
  return (
    <Box
      paddingX={{
        base: "16",
        md: "8",
        lg: "16",
        xl: "28",
      }}
    >
      <Flex
        justify={{
          base: "center",
          md: "flex-start",
        }}
        width={{
          base: "100%",
          lg: "auto",
        }}
        marginTop={{
          base: "30px",
          md: "100px",
          lg: "50px",
        }}
        marginBottom={{
          base: "20px",
          md: "20px",
          lg: "50px",
        }}
        marginX={{
          base: "0px",
          md: "3",
        }}
        paddingX={{
          base: "0",
          md: "3",
        }}
      >
        <Heading
          as={"h3"}
          textAlign={{
            base: "center",
            md: "right",
          }}
          width={"fit"}
          borderBottom={"solid"}
          borderColor={"aca_primary.500"}
          paddingEnd={"20px"}
          paddingStart={{
            base: "20px",
            md: "0",
          }}
        >
          قريبا
        </Heading>
      </Flex>
      <Carousel
        arrowGaps={{
          base: "-50px",
          md: "-100px",
          lg: "-90px",
        }}
        width={{
          base: "300px",
          md: "auto",
          lg: "auto",
        }}
        slidesToShow={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
      >
        {children}
      </Carousel>
    </Box>
  );
};

export default UpcomingSlider;
