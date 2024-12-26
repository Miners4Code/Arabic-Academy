import Navbar from "@/sections/Navbar/Navbar"
import Hero from "@/sections/Hero/Hero";
import ArabicLang from "@/sections/ArabicLang/ArabicLang";
import Footer from "@/sections/Footer/Footer";
import { Flex } from "@chakra-ui/react";
import EduTracks from "@/sections/EduTracks/EduTracks";
import Resources from "@/sections/Resources/Resources";
import Products from "@/sections/Products/Products";
import Exams from "@/sections/Examination/Exams";
import Contact from "@/sections/Contacts/Contact";
import FeedbackCard from "@/components/FeedbackCard/Feedback-card";

export default function Home() {
  return (
    <Flex as={"main"} flexDir={"column"} gridRowStart={2}>
      <Navbar />
      <Hero />
      <Resources />
      <ArabicLang />
      <Products />
      <Exams />
      <EduTracks />
      <Contact />
      <FeedbackCard />
      <Footer />
    </Flex>
  );
}
