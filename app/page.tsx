import Navbar from "@/sections/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import ArabicLang from "@/sections/ArabicLang/ArabicLang";
import Footer from "@/sections/Footer/Footer";
import { Box, Button, Flex } from "@chakra-ui/react";
import EduTracks from "@/sections/EduTracks/EduTracks";
import Resources from "@/sections/Resources/Resources";
import Products from "@/sections/Products/Products";
import Exams from "@/sections/Examination/Exams";
import Contact from "@/sections/Contacts/Contact";
import FeedbackCarousel from "@/components/Feedback/FeedbackCarousel";
import Link from "next/link";

export const revalidate = 14_400; // 4hrs

export default async function Home() {
  const coursesResponse = await fetch(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/courses",
  );
  const { courses } = await coursesResponse.json();

  const reviewsResponse = await fetch(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/reviews",
  );
  const { reviews } = await reviewsResponse.json();

  return (
    <Flex as={"main"} flexDir={"column"} gridRowStart={2}>
      <Navbar />
      <Hero />
      <Resources />
      <ArabicLang />
      <Box p={"100px"}>
        <Button
          mx={"auto"}
          w={"280px"}
          fontSize={"24px"}
          bg={"aca_cyan.400"}
          _hover={{
            bg: "aca_cyan.500",
          }}
        >
          <Link
            href={"/ai-tools"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            أدوات الذكاء الاصطناعي
          </Link>
        </Button>
      </Box>
      <Products courses={courses} />
      <Exams />
      <EduTracks />
      <Contact />
      <FeedbackCarousel reviews={reviews} />
      <Footer />
    </Flex>
  );
}
