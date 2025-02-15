import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  text: string;
  number: number;
  icon: ReactNode;
  isActive?: boolean;
  display?: "block" | "flex";
};
const UserSection: React.FC<Props> = ({
  text,
  number,
  icon,
  isActive,
  display,
}) => {
  return (
    <Box
      paddingY={{
        md: "15px",
        base: "10px",
      }}
      paddingX={{
        md: "25px",
        base: "15px",
      }}
      textAlign={"center"}
      bg={isActive ? "aca_primary.400" : "transparent"}
      fontWeight={"bold"}
      color={isActive ? "white" : "aca_primary.400"}
      cursor={"pointer"}
      display={display ? "flex" : "block"}
      justifyContent={display ? "space-between" : "start"}
    >
      <Flex alignItems={"center"} gap={"5px"}>
        {icon}
        <p>{text}</p>
      </Flex>
      <p>{number}</p>
    </Box>
  );
};

export default UserSection;
