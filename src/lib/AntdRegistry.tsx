"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";

import { App, ConfigProvider } from "antd";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";

import { THEME_CONFIG } from "@/constants";

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cache] = React.useState(() => createCache());

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    ></style>
  ));

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider theme={THEME_CONFIG}>
        <App>{children}</App>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
