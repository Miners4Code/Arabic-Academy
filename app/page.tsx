import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex as={"main"} flexDir={"column"} gridRowStart={2}>
      <Link href={"/ai-tools"}>
        AI tools
      </Link>
    </Flex>
  );
}
