import type { Metadata } from "next";
import React from "react";

import Navbar from "@/components/NavigationMenu";

import "../globals.css";

export const metadata: Metadata = {
  title: "GitHub Stats Dashboard",
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
