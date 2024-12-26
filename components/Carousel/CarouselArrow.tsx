import React from "react";
import { Button } from "@chakra-ui/react";
import ChevronRight from "@/icons/ChevronRight";
import ChevronLeft from "@/icons/ChevronLeft";

interface ArrowProps {
  onClick?: React.MouseEventHandler;
  dir: "left" | "right";
  buttonColor: "white" | "primary";
  arrowsGap: {
    base: string;
    md: string;
    lg: string;
  };
}

const CarouselArrow: React.FC<ArrowProps> = ({
  onClick,
  dir,
  buttonColor,
  arrowsGap,
}) => {
  return (
    <Button
      display={"block"}
      onClick={onClick}
      pos={"absolute"}
      zIndex={1000}
      top={"50%"}
      right={
        dir === "right"
          ? {
              base: `${arrowsGap.base}`,
              md: `${arrowsGap.md}`,
              lg: `${arrowsGap.lg}`,
            }
          : "auto"
      }
      left={
        dir === "left"
          ? {
              base: `${arrowsGap.base}`,
              md: `${arrowsGap.md}`,
              lg: `${arrowsGap.lg}`,
            }
          : "auto"
      }
      translate={"0% -50%"}
      color={"white"}
      fontSize={"lg"}
      width={{
        base: "40px",
        md: "58px",
        lg: "48px",
      }}
      height={{
        base: "40px",
        md: "58px",
        lg: "48px",
      }}
      rounded={"full"}
      bg={"transparent"}
      border={"solid"}
      borderColor={buttonColor === "white" ? "white" : "aca_primary.400"}
      borderWidth={"4px"}
    >
      {dir === "right" ? (
        <ChevronRight arrowColor={buttonColor} />
      ) : (
        <ChevronLeft arrowColor={buttonColor} />
      )}
    </Button>
  );
};

export default CarouselArrow;
