import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { Pressable, TouchableOpacity } from "react-native";

export const PressableButtonStyled = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: ${(props?: any) => props.theme.buttonVariable.borderRadius}px;
  min-height: ${(props?: any) =>
    props.btnHeight || props.theme.buttonVariable.btnHeight}px;
`;

export const ButtonGradientStyled = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: ${(props?: any) => props.theme.buttonVariable.borderRadius}px;
  min-height: ${(props?: any) =>
    props.btnHeight || props.theme.buttonVariable.btnHeight}px;
`;

export const ButtonStyled = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: ${(props?: any) =>
    props?.bdRadius || props.theme.buttonVariable.borderRadius}px;
  min-height: ${(props?: any) =>
    props.btnHeight || props.theme.buttonVariable.btnHeight}px;
  ${(props?: any) =>
    `background-color:${
      props?.appearance !== "outline" &&
      props?.appearance !== "clear" &&
      props?.disabled
        ? props.theme.color.button[props?.disabledBgColor] ||
          props.disabledBgColor ||
          props.theme.color.button.gray50
        : props.theme.color.button[props?.bgColor] || props.bgColor
    }`};
  ${(props?: any) =>
    `border-color: ${
      props?.disabled
        ? props.theme.color.button[props?.disabledBorderColor] ||
          props.disabledBorderColor ||
          props.theme.color.button.gray60
        : props.theme.color.button[props?.borderColor] ||
          props?.borderColor ||
          props.theme.color.button.gray60
    }`};
  ${(props?: any) =>
    props?.appearance === "outline" &&
    `border-width: ${props?.bdWidth || 1}px`};
`;
