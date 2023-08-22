import React, { useContext, useState, useRef, memo } from "react";
import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "styled-components";

import { TextCom } from "../typo";
import { IconCom } from "../icon";

let tmp: any = null;
let timeout: number = 300;
export const FlatListCom: React.FC<CommonComponents.FlatListCom> = memo(
  ({
    flatRef,
    refreshing,
    onRefresh,
    emptytext,
    isLoading,
    isScrollToTop = true,
    dictionary_data,
    scrollToTopBottom = 15,
    langStore,
    ...props
  }) => {
    const themeContext = useContext(ThemeContext);
    const flatListRef: any = useRef(null);
    const scrollYRef: any = useRef(0);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const content_offset = 300;

    const emptyComponent = () => (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
        }}
      >
        <IconCom
          name="inbox"
          type="Octicons"
          iconSize={50}
          style={{ marginBottom: 15 }}
        />
        <TextCom>{emptytext}</TextCom>
      </View>
    );

    const footerComponent = () =>
      isLoading &&
      props?.data?.length > 10 && (
        <ActivityIndicator
          size="small"
          color={themeContext.color.refresh.primary0}
          style={{ marginVertical: 10, marginBottom: 40 }}
        />
      );

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            onRefresh && (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={-1}
                tintColor={themeContext.color.refresh.primary0}
              />
            )
          }
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={emptyComponent}
          ListFooterComponent={footerComponent}
          ref={flatRef || flatListRef}
          onScroll={(event) => {
            scrollYRef.current = event.nativeEvent.contentOffset.y;
            clearTimeout(tmp);
            tmp = setTimeout(() => {
              setContentVerticalOffset(scrollYRef.current);
            }, timeout);
          }}
          {...props}
        />
        {contentVerticalOffset > content_offset && isScrollToTop && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              flatListRef?.current?.scrollToOffset({
                animated: true,
                offset: 0,
              });
            }}
            style={[
              styles.scrollicon_wrap,
              {
                bottom: scrollToTopBottom,
                backgroundColor: themeContext?.color?.container?.gray100,
              },
            ]}
          >
            <IconCom name="arrowup" type="AntDesign" color="white" />
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

FlatListCom.defaultProps = {
  data: [],
  refreshing: false,
  emptytext: "no_data_available",
};

const styles = StyleSheet.create({
  scrollicon_wrap: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
  },
});
