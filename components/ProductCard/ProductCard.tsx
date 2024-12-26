import { Box, Button, Card, Text } from "@chakra-ui/react";
import ProductIconMore from "@/icons/ProductIconMore";
import ProductIconCart from "@/icons/ProductIconCart";
import ComingSoon from "./ComingSoon";
import React from "react";

type Props = {
  soon: boolean;
  icon: React.ReactNode;
  title: string;
  trainer: string;
  courseDetails: {
    vids: number;
    hours: number;
    mins: number;
  };
} & ({ soon: false; price: number } | { soon: true; price?: never });

const ProductCard: React.FC<Props> = ({
  soon,
  icon,
  title,
  trainer,
  courseDetails,
  price,
}) => {
  return (
    <Box
      borderRadius={"10px"}
      position={"relative"}
      shadow={"aca_shadow.mb"}
      dir="rtl"
    >
      {soon && <ComingSoon />}
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
          {icon}
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
              base: "center"
            }}
          >
            <Box
              display={"flex"}
              justifyContent={{ 
                md: "space-between",
                base: "center"
              }}
              pos={"relative"}
            >
              <Text as={"h3"}>{title}</Text>
              {!soon && (
                <Text
                  as={"span"}
                  fontSize={"22px"}
                  fontWeight={700}
                  pos={"absolute"}
                  left={0}
                >
                  ${price}
                </Text>
              )}
            </Box>
            <Box paddingBottom={"18px"}>
              <Text>{trainer}</Text>
              <Text>
                {courseDetails.vids}فيديو,
                {courseDetails.hours}ساعة و{courseDetails.mins}دقيقة
              </Text>
            </Box>
          </Card.Body>
          <Card.Footer display="flex" justifyContent="center" paddingX={{
            xl: "20px",
            lg: "10px",
            base: "20px"
          }}>
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
              {soon ? "احجز الان" : "شراء"}
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};

export default ProductCard;
