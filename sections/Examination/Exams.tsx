"use client";

import { Box, Flex } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import examinationImage1 from "@/assets/examinationImage1.png";
import examinationImage2 from "@/assets/examinationImage2.png";
import CustomListItem from "@/components/DiscountBanner/CustomListItem/CustomListItem";
import Terminal from "@/icons/Terminal";
import NoteBook from "@/icons/NoteBook";
import RatingCert from "@/icons/RatingCert";
import ACAButton from "@/components/ACAButton/ACAButton";
import Notes from "@/icons/Notes";

export const Exams = () => {
  return (
    <Flex
      bgGradient={"to-l"}
      gradientFrom={"aca_primary.400"}
      gradientTo={"aca_primary.500"}
      justify={"center"}
      paddingY={{
        base: "50px",
        md: "100px",
      }}
      gap={"50px"}
      paddingX={{
        lg: "200px",
      }}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
    >
      <Flex
        justify={"center"}
        paddingX={{
          base: "24px",
        }}
      >
        <Box>
          <Box width={"60%"} marginBottom={"40%"} position={"relative"}>
            <NextImage src={examinationImage1} alt="People having an exam" />
            <Box width={"100%"} position={"absolute"} top={"65%"} right={"65%"}>
              <NextImage src={examinationImage2} alt="People having an exam" />
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box
        width={{
          lg: "50%",
        }}
        paddingX={{
          base: "50px",
          lg: "0",
        }}
      >
        <CustomListItem
          icon={<NoteBook />}
          heading="اختبر قدراتك"
          text="تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة. من خلال خدمة الامتحان البرمجي الإلكتروني"
        />
        <CustomListItem
          icon={<Terminal />}
          heading="قم بالاختيار"
          text="يمكنك اختيار اللغة البرمجية التي تود اختبار معرفتك بها، سواء كانت Python، Java، JavaScript أو أي لغة أخرى من اللغات المتاحة"
        />
        <CustomListItem
          icon={<RatingCert />}
          heading="اعرف ترتيبك"
          text="تيح لك لوحة الشرف معرفة ترتيبك بين الطلاب الذين اجتازوا الامتحان، مما يمنحك فرصة مميزة للتميز والإشادة بإنجازك أمام المجتمع الأكاديمي وزملائك"
        />
        <Box
          marginRight={{
            base: "0",
            lg: "48px",
          }}
          marginTop={"54px"}
          display={"flex"}
          justifyContent={{
            base: "center",
            lg: "start",
          }}
        >
          <ACAButton
            text="قسم الامتحانات"
            icon={<Notes />}
            bg="tomato"
            size="lg"
            weight="700"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Exams;
