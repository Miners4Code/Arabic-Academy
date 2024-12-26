import { Icon } from "@chakra-ui/react";
import styles from "../components/ProductCard/coming-soon.module.css";

const soonImg = () => {
  return (
    <Icon
      fontSize={{
        base: "150px",
        md: "200px",
        lg: "200px",
      }}
      className={styles.soonImg}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        <polygon points="0,0 120,0 0,120" fill={"#00be98"} />
      </svg>
    </Icon>
  );
};

export default soonImg;
