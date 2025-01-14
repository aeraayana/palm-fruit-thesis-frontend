import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin className="!text-gray-200"/>;

const Spinner = () => {
  return <Spin indicator={antIcon} />;
};

export default Spinner;
