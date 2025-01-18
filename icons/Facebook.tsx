import { Icon } from "@chakra-ui/react";
import React from "react";

const Facebook = () => {
  return (
    <Icon fontSize={{
      base: "15px",
      md: "19px",
      lg: "17px"
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="26"
        viewBox="0 0 18 26"
        fill="none"
      >
        <path
          d="M16.4013 14.6673L17.3009 10.0049H11.6765V6.97927C11.6765 5.70371 12.4622 4.46035 14.9812 4.46035H17.5381V0.490772C17.5381 0.490772 15.2178 0.175781 12.9993 0.175781C8.36741 0.175781 5.33983 2.40889 5.33983 6.45143V10.0049H0.191162V14.6673H5.33983V25.9386H11.6765V14.6673H16.4013Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
};

export default Facebook;
