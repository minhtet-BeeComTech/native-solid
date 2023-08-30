import React, { useContext, useRef } from "react";
import { RefreshControl, View } from "react-native";
import { ThemeContext } from "styled-components";

import { StyleScrollView } from "../../../theme";

export const ScrollViewCom = ({ children, ...props }: any) => {
  const { refreshing, onRefresh, full } = props;
  const themeContext = useContext(ThemeContext);
  const listRef: any = useRef(null);

  return (
    <StyleScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      refreshControl={
        onRefresh && (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={-1}
            tintColor={themeContext.color.refresh.primary0 || "#C00F27"}
          />
        )
      }
      ref={listRef}
      scrollEventThrottle={0}
      {...props}
    >
      <View style={{ padding: full ? 0 : 16, flexGrow: 1 }}>{children}</View>
    </StyleScrollView>
  );
};
