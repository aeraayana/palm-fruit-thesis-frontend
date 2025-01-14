"use client";

import React from "react";
import LayoutSider from "@/components/LayoutSider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutSider>{children}</LayoutSider>;
}
