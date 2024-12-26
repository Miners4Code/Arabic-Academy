import { Box, Text } from "@chakra-ui/react";
import styles from "./coming-soon.module.css";
import SoonImg from "@/icons/soonImg";
const ComingSoon = () => {
  return (
    <Box
      className={styles.comingSoon}
      width={{
        base: "80px",
        md: "120px",
        lg: "120px",
      }}
      height={{
        base: "80px",
        md: "120px",
        lg: "120px",
      }}
    >
      <SoonImg />

      {/* For Box Shadow */}
      <Box
        className={styles.back}
        width={{
          base: "93px",
          md: "123px",
          lg: "123px",
        }}
        bg={"aca_cyan.400"}
      ></Box>

      <Text
        position={"absolute"}
        className={styles.label}
        top={{
          base: "12px",
          md: "20px",
          lg: "20px",
        }}
        left={{
          base: "12px",
          md: "18px",
          lg: "18px",
        }}
        fontSize={{
          base: "primary.mb",
          md: "primary.tb",
          lg: "primary.dt",
        }}
        fontWeight={"bold"}
        zIndex={"5"}
      >
        قريباً
      </Text>
    </Box>
  );
};

export default ComingSoon;

