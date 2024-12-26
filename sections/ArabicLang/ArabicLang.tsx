import ACAButton from "@/components/ACAButton/ACAButton";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import datLang from "@/assets/dat-lang.png";
import Document from "@/icons/Document";
import BgVideo from "./BgVideo";

const ArabicLang = () => {
  return (
    <Flex
      className="wrapper-test"
      flexDir={{
        base: "column",
        lg: "row",
      }}
      paddingY={{
        base: "20px",
        md: "40px",
        lg: "280px",
      }}
      paddingX={{
        lg: "50px",
      }}
      paddingTop={{
        base: "58px"
      }}
      justify={"center"}
      align={"center"}
      gap={{
        base: "20px",
        md: "40px",
        lg: "0px",
      }}
      pos="relative"
      overflow={"hidden"}
      background={"transparent"}
    >
      <Flex
        maxWidth={{
          base: "150px",
          md: "400px",
        }}
        justify={"center"}
        marginLeft={{
          lg: "150px",
        }}
      >
        <BgVideo />
        <Flex
          justify={"center"}
          flexDir={"column"}
          align={"center"}
          pos={"relative"}
          zIndex={1}
        >
          <Image src={datLang} alt="Arabic language" />
          <Heading
            as={"h2"}
            fontSize={{
              base: "18px",
              md: "50px",
              lg: "80px",
            }}
            color={"white"}
            textAlign={"center"}
            lineHeight={"40px"}
            marginTop={{
              base: "20px",
              md: "55px",
              lg: "80px",
            }}
          >
            لغة ضاد
          </Heading>
        </Flex>
      </Flex>
      <Box
        pos={"relative"}
        zIndex={10}
        width={{
          base: "220px",
          md: "700px",
          lg: "630px",
        }}
      >
        <Text
          color={"white"}
          fontSize={{
            base: "secondary.mb",
            md: "27px",
          }}
          lineHeight={{
            base: "25px",
            md: "40px",
          }}
          fontWeight={{
            base: "400",
            md: "700",
          }}
          marginBottom={{
            base: "0px",
            md: "40px",
          }}
          textAlign={{
            base: "center",
            lg: "start",
          }}
        >
          في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي
          يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن
          هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص، سواء
          كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن تكون
          الشروحات دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على تطبيق
          ما يتعلمونه بشكل فعّال.
        </Text>
        <Box
          width={"fit"}
          marginX={{
            base: "auto",
            lg: "0px",
          }}
          mt={{ base: "20px" }}
        >
          <ACAButton
            size="md"
            weight="700"
            text="لغة ضاد"
            bg="tomato"
            icon={<Document />}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default ArabicLang;
