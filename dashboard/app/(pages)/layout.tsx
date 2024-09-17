import type { Metadata } from "next";
import React from "react";

import Navbar from "@/components/NavBar";

import "../globals.css";

export const metadata: Metadata = {
  title: "GitHub Stats Dashboard2",
  description: "Dashboard to Display GitHub Statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
