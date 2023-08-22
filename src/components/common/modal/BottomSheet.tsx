import React, { useEffect, useState, useContext } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";
import { ThemeContext } from "styled-components";

interface BottomSheetProps {
  minHeight?: number;
  maxHeight?: number;
  expandedHeight?: number;
  children?: any;
}

type BottomSheetPositions = "minimised" | "maximised" | "expanded";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const nav_height = 48;

export const BottomSheet: React.FC<BottomSheetProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    // Watch for screen size changes and update the dimensions
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  // Fixed values (for snap positions)
  const minHeight = props.minHeight || 120;
  const maxHeight = props.maxHeight || dimensions.screen.height;
  const expandedHeight = props.expandedHeight || dimensions.screen.height * 0.6;

  // Animated values
  const position = useSharedValue<BottomSheetPositions>("minimised");
  const sheetHeight = useSharedValue(-minHeight);
  const navHeight = useSharedValue(0);

  const springConfig: WithSpringConfig = {
    damping: 50,
    mass: 0.3,
    stiffness: 120,
    overshootClamping: true,
    restSpeedThreshold: 0.3,
    restDisplacementThreshold: 0.3,
  };

  const DRAG_BUFFER = 40;

  const onGestureEvent = useAnimatedGestureHandler({
    // Set the context value to the sheet's current height value
    onStart: (_ev, ctx: any) => {
      ctx.offsetY = sheetHeight.value;
    },
    // Update the sheet's height value based on the gesture
    onActive: (ev, ctx: any) => {
      sheetHeight.value = ctx.offsetY + ev.translationY;
    },
    // Snap the sheet to the correct position once the gesture ends
    onEnd: () => {
      // 'worklet' directive is required for animations to work based on shared values
      "worklet";

      // Snap to expanded position if the sheet is dragged up from minimised position
      // or dragged down from maximised position
      const shouldExpand =
        (position.value === "maximised" &&
          -sheetHeight.value < maxHeight - DRAG_BUFFER) ||
        (position.value === "minimised" &&
          -sheetHeight.value > minHeight + DRAG_BUFFER);

      // Snap to minimised position if the sheet is dragged down from expanded position
      const shouldMinimise =
        position.value === "expanded" &&
        -sheetHeight.value < expandedHeight - DRAG_BUFFER;

      // Snap to maximised position if the sheet is dragged up from expanded position
      const shouldMaximise =
        position.value === "expanded" &&
        -sheetHeight.value > expandedHeight + DRAG_BUFFER;

      // Update the sheet's position with spring animation
      if (shouldExpand) {
        navHeight.value = withSpring(0, springConfig);
        sheetHeight.value = withSpring(-expandedHeight, springConfig);
        position.value = "expanded";
      } else if (shouldMaximise) {
        navHeight.value = withSpring(nav_height + 10, springConfig);
        sheetHeight.value = withSpring(-maxHeight, springConfig);
        position.value = "maximised";
      } else if (shouldMinimise) {
        navHeight.value = withSpring(0, springConfig);
        sheetHeight.value = withSpring(-minHeight, springConfig);
        position.value = "minimised";
      } else {
        sheetHeight.value = withSpring(
          position.value === "expanded"
            ? -expandedHeight
            : position.value === "maximised"
            ? -maxHeight
            : -minHeight,
          springConfig
        );
      }
    },
  });

  const sheetHeightAnimatedStyle = useAnimatedStyle(() => ({
    // The 'worklet' directive is included with useAnimatedStyle hook by default
    height: -sheetHeight.value,
  }));

  const sheetContentAnimatedStyle = useAnimatedStyle(() => ({
    paddingBottom: position.value === "maximised" ? 180 : 0,
    paddingTop: position.value === "maximised" ? 40 : 20,
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            sheetHeightAnimatedStyle,
            styles.sheet,
            {
              backgroundColor:
                themeContext?.color?.mode === "dark"
                  ? themeContext?.color?.container?.screenBg
                  : themeContext?.color?.container?.white,
            },
          ]}
        >
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          <Animated.View style={sheetContentAnimatedStyle}>
            <ScrollView>{props.children}</ScrollView>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  // The sheet is positioned absolutely to sit at the bottom of the screen
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  sheet: {
    justifyContent: "flex-start",
    minHeight: 80,
    // Add a shadow to the top of the sheet
    // shadowColor: '#DADADA',
    // shadowOffset: {
    //   width: 0,
    //   height: -2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    elevation: 4,
  },
  handleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  // Add a small handle component to indicate the sheet can be dragged
  handle: {
    width: "15%",
    height: 4,
    borderRadius: 8,
    backgroundColor: "#CCCCCC",
  },
  closeButton: {
    width: nav_height,
    height: nav_height,
    borderRadius: nav_height,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
