import styled, { DefaultTheme } from "styled-components";
import { View } from "react-native";

//* this styled is demo stage

interface IStyledSkeletonContainer {
  theme: DefaultTheme;
  borderRadius?: number;
  width?: number;
  height?: number;
  marginBottom?: number;
  style?: any;
}

export const StyledSkeletonContainer = styled(View)<IStyledSkeletonContainer>`
  background-color: ${(props?: any) =>
    props.theme.color.card[props?.bgColor] ||
    props.bgColor ||
    props.theme.color.card.white};
  border-radius: ${(props) =>
    props?.borderRadius || props.theme.skeletonVariable?.borderRadius}px;
  width: ${(props) => props?.width || props.theme.skeletonVariable.width}px;
  height: ${(props) => props?.height || props.theme.skeletonVariable.height}px;
  margin-bottom: ${(props) =>
    props.marginBottom || props.theme.skeletonVariable.marginBottom}px;
  overflow: hidden;
`;
