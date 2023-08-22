import React, { memo, useContext, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { ThemeContext } from "styled-components";

import {
  ButtonStyled,
  ButtonGradientStyled,
  PressableButtonStyled,
} from "theme";
import { TextCom } from "../typo";

export const ButtonCom: React.FC<CommonComponents.ButtonCom> = memo(
  ({
    children,
    text,
    btnLeftRender,
    btnRightRender,
    btnLoadingRender,
    btnContentRender,
    textStyle,
    isLoading,
    gradientProps,
    indicatorProps,
    onPress,
    activityIndicatorColor = "#070707",
    isPressable = false,
    ...props
  }) => {
    const themeContext = useContext(ThemeContext);
    const [active, setActive] = useState<boolean>(false);

    const handlePressEffect = () => setActive((prev) => !prev);

    const Button = isLoading ? (
      <>
        {btnLoadingRender ? (
          btnLoadingRender
        ) : (
          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <ActivityIndicator
              color={
                themeContext.color.button[activityIndicatorColor] ||
                activityIndicatorColor
              }
              {...indicatorProps}
            />
          </View>
        )}
      </>
    ) : (
      <>
        {btnLeftRender}
        {btnContentRender ? (
          btnContentRender
        ) : (
          <TextCom
            style={{
              textAlign: "center",
              marginLeft: btnLeftRender ? 8 : 0,
              marginRight: btnRightRender ? 8 : 0,
              ...textStyle,
            }}
            {...props}
          >
            {text || "Empty"}
          </TextCom>
        )}
        {btnRightRender}
      </>
    );

    const InnerContent =
      props?.appearance === "gradient" ? (
        <ButtonGradientStyled
          colors={
            active
              ? themeContext?.color?.button?.primaryPressed
              : themeContext?.color?.button?.primaryGradient
          }
          {...gradientProps}
          {...props}
        >
          {children || Button}
        </ButtonGradientStyled>
      ) : (
        children || Button
      );

    if (isPressable) {
      return (
        <PressableButtonStyled
          onPress={onPress}
          onPressIn={handlePressEffect}
          onPressOut={handlePressEffect}
          {...{
            ...props,
            bgColor:
              props?.appearance === "gradient" ? "transparent" : props?.bgColor,
          }}
        >
          {InnerContent}
        </PressableButtonStyled>
      );
    }

    return (
      <ButtonStyled
        onPress={onPress}
        {...{
          ...props,
          bgColor:
            props?.appearance === "gradient" ? "transparent" : props?.bgColor,
        }}
      >
        {InnerContent}
      </ButtonStyled>
    );
  }
);

ButtonCom.defaultProps = {
  bgColor: "primary0",
  color: "white",
  appearance: "full",
  activeOpacity: 0.7,
  gradientProps: {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
};
