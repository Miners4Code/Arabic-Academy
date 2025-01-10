import { Icon } from "@chakra-ui/react";

import React from "react";

export default function DropdownIcon({
  color = "white",
}: {
  color?: "white" | "primary";
}) {
  return (
    <Icon fontSize={12}>
      <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9.4458L0.803848 0.445801L11.1962 0.445801L6 9.4458Z"
          fill={color === "primary" ? "#462576" : "white"}
        />
      </svg>
    </Icon>
  );
}
