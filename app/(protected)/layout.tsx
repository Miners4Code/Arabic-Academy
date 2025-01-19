import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Navbar/Navbar";
import React from "react";

export default function EditUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
