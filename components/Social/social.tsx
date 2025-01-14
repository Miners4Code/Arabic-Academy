"use client";

import Facebook from "@/icons/Facebook";
import GooglePlus from "@/icons/GooglePlus";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const Social = () => {
  return (
    <Box width="full" textAlign="center" >
      <Flex align="center" justify="center" width="full" my="4">
        <Box flex="1" borderBottom="1px solid" borderColor="purple.300" />
        <Text mx="2" color="purple.500" fontSize="sm">
          يمكنك تسجيل الدخول باستخدام
        </Text>
        <Box flex="1" borderBottom="1px solid" borderColor="purple.300" />
      </Flex>
      <Flex gap="5" width="full" justify="center" marginY="30px">
        <Button size="sm" colorPalette="blue" shadow="0px 4px 4px 0px #00000040">
          <Flex gap="8" align="center">
            <Text>Facebook</Text>
            <Box
              border="1px solid white"
              height="45px"
              position="absolute"
              right="65%"
            />
            <Facebook />
          </Flex>
        </Button>
        <Button size="sm" colorPalette="red" shadow="0px 4px 4px 0px #00000040">
          <Flex gap="8" align="center">
            <Text>Google</Text>
            <Box
              border="1px solid white"
              height="45px"
              position="absolute"
              right="65%"
            />
            <GooglePlus />
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
};
