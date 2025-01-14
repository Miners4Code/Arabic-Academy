"use client";

import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  icon?: React.ReactNode;
  weight?: "400" | "500" | "600" | "700" | "900";
  bg?: "tomato" | "cyan";
  size?: "lg" | "md" | "sm";
  type?: "button" | "submit" | "reset";
}

const ACAButton: React.FC<Props> = ({
  text,
  bg,
  icon,
  weight,
  size,
  type,
}) => {
  return (
    <Button
      fontWeight={weight}
      bg={`aca_${bg}.400`}
      _hover={{
        bg: `aca_${bg}.500`,
      }}
      size={size}
      type={type}
    >
      {icon}
      {text}
    </Button>
  );
};

export default ACAButton;
