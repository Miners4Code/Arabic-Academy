"use client";

import React from "react";
import { Button, Link, Span } from "@chakra-ui/react";
import LoginIcon from "@/icons/Login";
import CreateAccount from "@/icons/CreateAccount";
import Logout from "@/icons/Logout";
import AvatarIcon from "@/icons/AvatarIcon";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useSession, signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function AuthenticationStatus() {
  const width = useWindowWidth();
  const session = useCurrentUser();

  const handleSignOut = async () => {
    try {
      await signOut({
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Show loading state
  if (status === "loading") {
    return null;
  }

  return (
    <>
      {!session?(
        width > 1024 && (
          <>
            <Link href="/auth/login">
              <Button
                w={"150px"}
                h={"50px"}
                rounded={"lg"}
                bg="aca_cyan.400"
                _hover={{
                  bg: "aca_cyan.500",
                }}
              >
                <CreateAccount />
                <Span>إنشاء حساب</Span>
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                rounded={"lg"}
                w={"150px"}
                h={"50px"}
                bg="aca_tomato.400"
                _hover={{
                  bg: "aca_tomato.500",
                }}
              >
                <LoginIcon />
                <Span>تسجيل الدخول</Span>
              </Button>
            </Link>
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
            onClick={handleSignOut}
          >
            <Logout />
          </Button>
        </>
      )}
    </>
  );
}
