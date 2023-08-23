import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";

type StyledSafeContainerProps = {
  safeAreaBgColor?: any;
};
export const StyledSafeContainer = styled(
  SafeAreaView
)<StyledSafeContainerProps>`
  background-color: ${(props) =>
    props.theme.color.container[props.safeAreaBgColor] ||
    props.safeAreaBgColor ||
    props.theme.color.container.screenBg};
  flex: 1;
`;

type StyledSafeBottomContainerProps = {
  safeAreaBgColor?: any;
};
export const StyledSafeBottomContainer = styled(
  SafeAreaView
)<StyledSafeBottomContainerProps>`
  background-color: ${(props) =>
    props.theme.color.container[props.safeAreaBgColor] ||
    props.safeAreaBgColor ||
    props.theme.color.container.screenBg};
  flex: 0;
`;

type StyledContainerProps = {
  containerBgColor?: any;
};
export const StyledContainer = styled(View)<StyledContainerProps>`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme.color.container[props.containerBgColor] ||
    props.containerBgColor ||
    props.theme.color.container.screenBg};
  position: relative;
`;

type StyledScrollViewProps = {
  bgColor?: any;
};
export const StyleScrollView = styled(ScrollView)<StyledScrollViewProps>`
  background-color: ${(props) =>
    props.theme.color.container[props.bgColor] ||
    props.bgColor ||
    props.theme.color.container.screenBg};
`;

type GestureScrollViewProps = {
  bgColor?: any;
};
export const StyleGestureScrollView = styled(
  GestureScrollView
)<GestureScrollViewProps>`
  background-color: ${(props) =>
    props.theme.color.container[props.bgColor] ||
    props.bgColor ||
    props.theme.color.container.screenBg};
`;
