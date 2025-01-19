"use client";

import { Box, Flex } from "@chakra-ui/react";
import UserDetails from "./UserDetails";
import UserImg from "./UserImg";
import ACAButton from "@/components/ACAButton/ACAButton";
import UserEditIcon from "@/icons/UserPage/UserEditIcon";
import UserSection from "./UserSection";
import PC from "@/icons/UserPage/PC";
import CheckIcon from "@/icons/UserPage/CheckIcon";
import MenuIcon from "@/icons/UserPage/MenuIcon";
import { useState } from "react";
import SectionsMenu from "./SectionsMenu";
import Link from "next/link";

const User = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box
      border={"1px solid"}
      borderColor={"aca_primary.400"}
      borderRadius={"10px"}
      boxShadow={"aca_shadow.mb"}
      color={"aca_primary.400"}
      width={{
        base: "90%",
        md: "750px",
      }}
    >
      <Flex
        flexDirection={{
          lg: "row",
          base: "column",
        }}
        gap={{
          base: "15px",
          md: "25px",
        }}
        paddingY={{
          lg: "25px",
          base: "15px",
        }}
        paddingX={{
          lg: "30px",
          base: "10px",
        }}
      >
        <UserImg />
        <UserDetails />
        <Box
          className="edit-btn"
          alignSelf={{
            base: "center",
            lg: "end",
          }}
        >
          <Link href="/edit-user">
            <ACAButton
              icon={<UserEditIcon />}
              bg="cyan"
              size="sm"
              text={"تعديل"}
            />
          </Link>
        </Box>
      </Flex>
      <Box borderTop={"1px solid"} borderColor={"aca_primary.400"}>
        <Flex
          display={{
            base: "none",
            md: "flex",
          }}
          justifyContent={"center"}
        >
          <UserSection
            text="المساقات"
            number={12}
            icon={<PC />}
            isActive={true}
          />
          <UserSection
            text="مكتملة"
            number={5}
            icon={<CheckIcon />}
            isActive={false}
          />
        </Flex>
        <Flex
          display={{
            base: "flex",
            md: "none",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
          padding={"10px"}
          onClick={() => setShowMenu(!showMenu)}
          position={"relative"}
          cursor={"pointer"}
        >
          <MenuIcon />
          <p>تفاصيل</p>
        </Flex>
        {showMenu && <SectionsMenu />}
      </Box>
    </Box>
  );
};

export default User;
