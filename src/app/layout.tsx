import type { Metadata } from "next";

import React from "react";
import Providers from "@/global_context/Providers";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

require("dayjs/locale/id");

import "./globals.css";

export const metadata: Metadata = {
  title: "Retursi",
  // icons: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '512x512',
  //     url: '/icons/manifest-icon-512.png',
  //   },
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: "192x192",
  //     url: '/icons/manifest-icon-192.png',
  //   },
  //   {
  //     rel: 'apple-icon',
  //     sizes: '180x180',
  //     url: '/icons/apple-icon-180.png',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
