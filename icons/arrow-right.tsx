import { Icon } from "@chakra-ui/react";
import React from "react";

const ArrowRight = ({ color = "white" }: { color?: "white" | "primary" }) => {
  return (
    <Icon fontSize={24}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M9.12373 14.4498L16.8933 6.70239C17.4303 6.16691 18.2986 6.16691 18.8299 6.70239L20.121 7.98983C20.6581 8.52531 20.6581 9.39119 20.121 9.92098L14.6195 15.4182L20.1268 20.9097C20.6638 21.4452 20.6638 22.3111 20.1268 22.8409L18.8356 24.134C18.2986 24.6695 17.4303 24.6695 16.899 24.134L9.12944 16.3866C8.58672 15.8512 8.58672 14.9853 9.12373 14.4498Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
};

export default ArrowRight;
