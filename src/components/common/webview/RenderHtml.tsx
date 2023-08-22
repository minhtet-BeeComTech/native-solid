import React, { memo } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

export const RenderHtmlCom = memo((props: any) => {
  const { width } = useWindowDimensions();
  return <RenderHtml contentWidth={width} {...props} />;
});
