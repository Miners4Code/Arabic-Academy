import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Navbar/Navbar";
import React, { ReactNode } from "react";

export default function ToolsListLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
