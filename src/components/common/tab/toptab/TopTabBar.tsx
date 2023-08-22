import { useContext, useRef, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { ThemeContext } from "styled-components";

import { TextCom } from "../../typo";

export const TopTabBarCom = ({
  state,
  descriptors,
  navigation,
  position,
  activeBdColor,
  unActiveBdColor,
  activeTextColor,
  unActiveTextColor,
  textProps,
  itemStyle,
  isScrollTabBar = false,
  tabBarContainerProps,
  renderTabItem,
  itemProps,
  ...props
}: any) => {
  const scrollViewRef: any = useRef(null);

  useEffect(() => {
    scrollViewRef?.current?.scrollTo({
      x: state.index * 50,
      y: 0,
      animated: true,
    });
  }, [state.index]);
  const themeContext = useContext(ThemeContext);

  const innerContent = state.routes.map((route: any, index: number) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

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

    return renderTabItem ? (
      renderTabItem({ index, isFocused, label, onPress, onLongPress })
    ) : (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderBottomColor: isFocused
            ? activeBdColor || themeContext?.color?.tab?.activeBdColor
            : unActiveBdColor || themeContext?.color?.tab?.unActiveBdColor,
          paddingVertical: 10,
          ...itemStyle,
        }}
        {...itemProps}
      >
        <TextCom
          textAlign="center"
          color={
            isFocused
              ? activeTextColor || "text"
              : unActiveTextColor || "gray300"
          }
          {...textProps}
        >
          {label}
        </TextCom>
      </TouchableOpacity>
    );
  });

  return (
    <>
      {isScrollTabBar ? (
        <View>
          <ScrollView
            ref={(list) => (scrollViewRef.current = list)}
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            {...tabBarContainerProps}
          >
            {innerContent}
          </ScrollView>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }} {...tabBarContainerProps}>
          {innerContent}
        </View>
      )}
    </>
  );
};
