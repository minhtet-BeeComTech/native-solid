import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export const WebViewCom: React.FC<CommonComponents.WebViewCom> = memo(
  ({ webViewRef, ...props }) => (
    <WebView
      ref={webViewRef}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.web_style}
      {...props}
    />
  )
);

const styles = StyleSheet.create({
  web_style: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});
