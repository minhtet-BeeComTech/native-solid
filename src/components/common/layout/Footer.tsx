import React, { useContext, memo } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

import { IconCom } from "../icon";
import { TextCom } from "../typo";

type Style = {
  backgroundColor?: any | undefined;
  iconContainer?: any;
  imgContainer?: any;
  iconSize?: any;
  SafeAreaViewCon?: any;
};
const { width, height } = Dimensions.get("window");
export const FooterCom: React.FC<CommonComponents.FooterCom> = memo((props) => {
  const { state, descriptors, navigation } = props;
  const themeContext = useContext(ThemeContext);
  const focusedOptions =
    descriptors && descriptors[state?.routes[state.index].key].options;

  if (focusedOptions?.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={[
        styles.SafeAreaViewCon,
        { backgroundColor: themeContext.color.footer.footerBg },
      ]}
    >
      {state?.routes.map((route: any, index: number) => {
        const { options } = descriptors && descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon =
          options.tabBarIcon !== undefined ? (
            isFocused ? (
              options.tabBarActiveIcon
            ) : (
              options.tabBarIcon
            )
          ) : (
            <IconCom name="home" type="Ionicons" iconSize="xl" />
          );

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconContainer}
          >
            {route?.name === "QRTab" ? (
              <View
                style={{
                  flex: 1,
                  width: 56,
                  height: 56,
                  borderRadius: 56 / 2,
                  backgroundColor: themeContext?.color?.footer?.primary0,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: 35,
                }}
              >
                {icon}
              </View>
            ) : (
              <>
                <View style={[styles.imgContainer]}>{icon}</View>
                <TextCom
                  textAlign="center"
                  size="sm"
                  color={
                    isFocused
                      ? themeContext.color.footer.primary0
                      : themeContext.color.footer.gray30
                  }
                >
                  {label}
                </TextCom>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create<Style>({
  SafeAreaViewCon: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  iconContainer: {
    flex: 1,
    width: width / 3,
    minHeight: 62,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 5,
    paddingTop: 9,
  },
  imgContainer: {
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
  iconSize: {
    width: 22,
    height: 22,
  },
});
