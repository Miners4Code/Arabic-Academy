"use client";

import React from "react";
import { Button, Span } from "@chakra-ui/react";
import LoginIcon from "@/icons/Login";
import CreateAccount from "@/icons/CreateAccount";
import Logout from "@/icons/Logout";
import AvatarIcon from "@/icons/AvatarIcon";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function AuthenticationStatus({
  authenticated,
  toggleAuthenticated,
}: {
  authenticated: boolean;
  toggleAuthenticated: () => void;
}) {
  const width = useWindowWidth();

  return (
    <>
      {!authenticated ? (
        width > 1024 && (
          <>
            <Button
              w={"150px"}
              h={"50px"}
              rounded={"lg"}
              bg="aca_cyan.400"
              _hover={{
                bg: "aca_cyan.500",
              }}
              onClick={toggleAuthenticated}
            >
              <CreateAccount />
              <Span>إنشاء حساب</Span>
            </Button>
            <Button
              rounded={"lg"}
              w={"150px"}
              h={"50px"}
              bg="aca_tomato.400"
              _hover={{
                bg: "aca_tomato.500",
              }}
              onClick={toggleAuthenticated}
            >
              <LoginIcon />
              <Span>تسجيل الدخول</Span>
            </Button>
          </>
        )
      ) : (
        <>
          <Button
            w="fit-content"
            h="fit-content"
            rounded="full"
            bg="transparent"
          >
            <AvatarIcon />
          </Button>
          <Button
            w="50px"
            h="50px"
            rounded="full"
            bg="transparent"
            _hover={{
              bg: "aca_primary.500",
            }}
            onClick={toggleAuthenticated}
          >
            <Logout />
          </Button>
        </>
      )}
    </>
  );
}
