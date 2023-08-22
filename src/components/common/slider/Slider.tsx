import React, { memo, useRef } from "react";
import { StyleSheet } from "react-native";
import Slider, { SliderProps } from "@react-native-community/slider";

export const SliderCom: React.FC<CommonComponents.SliderCom> = memo(
  ({ sliderRef, ...props }) => {
    const sliderComRef = useRef<Slider>(null);

    return (
      <Slider
        style={styles.Slider}
        step={1}
        ref={sliderRef || sliderComRef}
        animateTransitions={true}
        animationType="spring"
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  Slider: {
    width: "100%",
    height: 35,
    paddingHorizontal: 15,
  },
});
