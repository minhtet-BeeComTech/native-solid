import React, { useContext, useRef, useState, useMemo, useEffect } from "react";
import {
  StatusBar,
  ScrollView,
  RefreshControl,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import { ThemeContext } from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyledSafeContainer, StyledContainer } from "theme";
import { IconCom } from "../icon";
import { NetInfoCom, CommingSoonCom } from "../result";
import { LoaderCom } from "./Loader";
import { HeaderCom } from "./Header";

let tmp: any = null;
let timeout: number = 300;
export const ContainerCom: React.FC<CommonComponents.ContainerCom> = ({
  children,
  vertical_offset,
  handleScroll,
  loadingBgColor,
  loadingProps,
  isCommingSoon = false,
  commingSoonProps,
  netInfoProps,
  isFooter,
  isChat = false,
  isStatusBarHide = false,
  isTranslucent = false,
  isScrollToTop = true,
  isScroll = true,
  chatIconBottom = 0,
  scrollToTopBottom = 10,
  statusBgColor,
  statusBarStyle,
  bottomSafeStyle,
  statusBarProps,
  ...props
}) => {
  const { navigation, isLoading, refreshing, onRefresh, full } = props;
  const themeContext = useContext(ThemeContext);
  const netInfo = useNetInfo();
  const listRef: any = useRef(null);
  const scrollYRef = useRef(0);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const content_offset = 300;

  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(
        themeContext.color.header[statusBgColor] ||
          statusBgColor ||
          "transparent"
      );
    }
    StatusBar.setHidden(isStatusBarHide);
    StatusBar.setBarStyle(
      statusBarStyle || themeContext?.color?.mode === "dark"
        ? "light-content"
        : "dark-content"
    );

    const unsubscribe = navigation?.addListener("focus", () => {
      // if (isTranslucent && Platform.OS === 'android') {
      //   StatusBar.setTranslucent(isTranslucent)
      // }
      if (!isFooter) {
        navigation?.getParent()?.setOptions({ tabBarVisible: false });
      } else {
        navigation?.getParent()?.setOptions({ tabBarVisible: true });
      }
    });

    return () => {
      // if (Platform.OS === 'android') {
      //   StatusBar.setTranslucent(false)
      // }
      navigation?.getParent()?.setOptions({ tabBarVisible: true });
      unsubscribe;
    };
  }, [themeContext.color.mode, isFooter, isTranslucent]);

  const handleViewProps = useMemo(() => {
    if (loadingBgColor !== "transparent" && isLoading) {
      return null;
    }
    return netInfo?.isConnected
      ? children
      : netInfo?.details && <NetInfoCom {...netInfoProps} />;
  }, [netInfo?.isConnected, loadingBgColor, isLoading, children]);

  return (
    <>
      <StatusBar showHideTransition="slide" translucent animated />
      <StyledSafeContainer {...props}>
        <HeaderCom {...props} />
        <StyledContainer {...props}>
          {isCommingSoon ? (
            <CommingSoonCom {...commingSoonProps} />
          ) : (
            <>
              {isScroll ? (
                <ScrollView
                  style={{ flex: 1, marginTop: props?.SH && -props.SH }}
                  contentContainerStyle={{ flexGrow: 1 }}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={true}
                  refreshControl={
                    onRefresh && (
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        progressViewOffset={-1}
                        tintColor={
                          themeContext.color.refresh.primary0 || "#C00F27"
                        }
                      />
                    )
                  }
                  ref={listRef}
                  // onScroll={(event) => {
                  //   handleScroll && handleScroll(event)
                  //   scrollYRef.current = event.nativeEvent.contentOffset.y
                  //   clearTimeout(tmp)
                  //   tmp = setTimeout(() => {
                  //     vertical_offset && vertical_offset(scrollYRef.current)
                  //     setContentVerticalOffset(scrollYRef.current)
                  //   }, timeout)
                  // }}
                  scrollEventThrottle={0}
                  nestedScrollEnabled={true}
                >
                  <View style={{ padding: full ? 0 : 16, flexGrow: 1 }}>
                    {handleViewProps}
                  </View>
                </ScrollView>
              ) : (
                <View
                  style={{
                    padding: full ? 0 : 16,
                    flexGrow: 1,
                    paddingBottom: props?.edges?.includes("button")
                      ? full
                        ? 0
                        : 16
                      : 0,
                    marginTop: props?.SH && -props.SH,
                  }}
                >
                  {handleViewProps}
                </View>
              )}
              <LoaderCom
                loadingBgColor={loadingBgColor}
                isLoading={isLoading}
                {...loadingProps}
              />
            </>
          )}
          {isChat && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                position: "absolute",
                bottom: chatIconBottom,
                right: 10,
              }}
            >
              <IconCom name="chatbubble-sharp" type="Ionicons" />
            </TouchableOpacity>
          )}
          {contentVerticalOffset > content_offset && isScrollToTop && (
            <TouchableOpacity
              onPress={() => {
                listRef?.current?.scrollTo({ offset: 0, animated: true });
              }}
              activeOpacity={0.7}
              style={[
                styles.scrollicon_wrap,
                {
                  bottom: scrollToTopBottom,
                  backgroundColor:
                    themeContext?.color?.container?.primary10 || "#C00F27",
                },
              ]}
            >
              <IconCom name="arrowup" type="AntDesign" color="white" />
            </TouchableOpacity>
          )}
        </StyledContainer>
      </StyledSafeContainer>
      {bottomSafeStyle && (
        <SafeAreaView
          edges={["bottom"]}
          style={{ flex: 0, ...bottomSafeStyle }}
        />
      )}
    </>
  );
};

ContainerCom.defaultProps = {
  isLoading: false,
  refreshing: false,
  full: false,
  edges: ["top", "left", "right"],
  isFooter: true,
  safeAreaBgColor: "primary0",
  loadingBgColor: "transparent",
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
    right: 16,
  },
});
