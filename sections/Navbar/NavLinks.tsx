import React from "react";
import {
  MenuTrigger,
  MenuRoot,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";
import DropdownIcon from "@/icons/DropdownIcon";
import {
  Box,
  Button,
  Span,
  Flex,
  Collapsible,
  MenuTriggerItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import HamBurgerMenu from "@/icons/HamBurgerMenu";
import CreateAccount from "@/icons/CreateAccount";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Signin from "@/icons/signin";

const menuResources = [
  { value: "blog", text: "المدونة" },
  { value: "website", text: "المنتدى" },
  { value: "short-lessons", text: "دروس فيديو قصيرة" },
  { value: "ai-tools", text: "دليل أدوات الذكاء الصطناعي" },
  { value: "questions", text: "بنك الأسألة التقنية" },
  { value: "midjourney", text: "دروس وأنماط اليدجورني" },
  { value: "ar-lang", text: "لغة ضاد" },
];

export default function NavLinks() {
  const width = useWindowWidth();
  const { data: session } = useSession();
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  const handleSignupClick = () => {
    router.push('/auth/signup');
  };

  if (width < 1024) {
    return (
      <MenuRoot positioning={{ placement: "bottom" }}>
        <MenuTrigger asChild>
          <Button
            variant={"ghost"}
            w={"50px"}
            h={"50px"}
            rounded="full"
            p="3"
            _hover={{
              bg: "aca_primary.500",
            }}
            _active={{
              bg: "aca_primary.500",
            }}
            _expanded={{
              bg: "aca_primary.500",
            }}
          >
            <HamBurgerMenu />
          </Button>
        </MenuTrigger>
        <MenuContent
          dir="rtl"
          p="5"
          spaceY="4"
          rounded="2xl"
          shadow="2xl"
          w={"250px"}
        >
          {!session && (
            <>
              <MenuItem
                value="log-in"
                borderBottomWidth="1px"
                borderColor="aca_primary.400"
                pb="10px"
                display={"flex"}
                justifyContent={"center"}
                onClick={handleLoginClick}
              >
                <Signin color="primary"/>
                <Span textAlign={"center"}>تسجيل الدخول</Span>
              </MenuItem>
              <MenuItem
                value="sign-up"
                borderBottomWidth="1px"
                borderColor="aca_primary.400"
                pb="10px"
                display={"flex"}
                justifyContent={"center"}
                cursor={"pointer"}
                onClick={handleSignupClick}
              >
                <CreateAccount color="primary" />
                <Span textAlign={"center"}>إنشاء حساب</Span>
              </MenuItem>
            </>
          )}
          <MenuTriggerItem w="full">
            <Collapsible.Root w={"full"}>
              <Collapsible.Trigger asChild>
                <Button
                  display="flex"
                  w="full"
                  rounded={"xl"}
                  justifyContent={"center"}
                  variant={"ghost"}
                  bg={"aca_primary.500"}
                  h={"fit"}
                  p="3"
                >
                  <Span fontSize={"md"}>المصادر</Span>
                  <DropdownIcon />
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content
                as="ul"
                rounded="lg"
                bg={"#f4eff6"}
                listStyle={"none"}
                p={5}
              >
                {menuResources.map((resource, idx) => (
                  <Box
                    as={"li"}
                    key={resource.value}
                    borderBottomWidth={
                      idx !== menuResources.length - 1 ? "1px" : "0"
                    }
                    borderColor={"aca_primary.400"}
                    py={"10px"}
                  >
                    <Span display="block" textAlign={"center"} w="full">
                      {resource.text}
                    </Span>
                  </Box>
                ))}
              </Collapsible.Content>
            </Collapsible.Root>
          </MenuTriggerItem>
          <MenuItem
            value="edu"
            borderBottomWidth="1px"
            borderColor={"aca_primary.400"}
            pb="10px"
          >
            <Span
              fontWeight={"medium"}
              color="aca_primary.500"
              textAlign={"center"}
              display="block"
              w="full"
            >
              المسارات التعليمية
            </Span>
          </MenuItem>
          <MenuItem value="contact">
            <Span
              fontWeight={"medium"}
              color="aca_primary.500"
              textAlign={"center"}
              display="block"
              w="full"
            >
              التواصل
            </Span>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    );
  }

  return (
    <Box as={"nav"} display={"flex"} justifyItems={"center"} h="full">
      <Flex as={"ul"} mx={"auto"} align={"center"} color={"white"} gap={"5"}>
        <li>
          <MenuRoot positioning={{ placement: "bottom" }}>
            <MenuTrigger asChild>
              <Button
                variant={"ghost"}
                w={"fit"}
                h={"fit"}
                py="1"
                px="3"
                _hover={{
                  bg: "aca_primary.500",
                }}
                _active={{
                  bg: "aca_primary.500",
                }}
                _expanded={{
                  bg: "aca_primary.500",
                }}
              >
                <Span>المصادر</Span>
                <DropdownIcon />
              </Button>
            </MenuTrigger>
            <MenuContent dir="rtl" p="5" spaceY="4" rounded="2xl" shadow="2xl">
              {menuResources.map((resource, idx) => (
                <MenuItem
                  key={resource.value}
                  value={resource.value}
                  borderBottomWidth={
                    idx !== menuResources.length - 1 ? "1px" : "0"
                  }
                  borderColor={"aca_primary.400"}
                  pb={idx !== menuResources.length - 1 ? "10px" : "0"}
                >
                  <Span display="block" textAlign={"center"} w="full">
                    {resource.text}
                  </Span>
                </MenuItem>
              ))}
            </MenuContent>
          </MenuRoot>
        </li>
        <li>
          <Link href={"#"}>
            <Span fontWeight={"medium"}>المسارات التعليمية</Span>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Span fontWeight={"medium"}>التواصل</Span>
          </Link>
        </li>
      </Flex>
    </Box>
  );
}