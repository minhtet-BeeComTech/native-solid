import styled from "styled-components";
import { Pressable, TouchableOpacity } from "react-native";

type StyledPressableCardProps = {
  isPressed: boolean;
};
export const StyledPressableCard = styled(Pressable)<StyledPressableCardProps>`
  ${(props?: any) => `
  border: 1px solid ${
    props?.isPressed
      ? props.theme.color.typo.primary
      : props.theme.color.card.borderColor
  };
  opacity: ${props.isPressed ? 0.5 : 1};
  border-radius: ${props.theme.cardVariable.borderRadius}px;
  ${
    props.isShadow &&
    `
    shadow-color: #00000029;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.20;
    shadow-radius: 2.22px;
    elevation: 3;
  `
  };
  padding: 10px;
  background-color: ${
    props.theme.color.card[props?.bgColor] ||
    props.bgColor ||
    props.theme.color.card.bgColor
  };
  `}
`;

export const StyledCard = styled(TouchableOpacity)`
  border: 1px solid
    ${(props?: any) =>
      props.theme.color.card[props?.bdColor] ||
      props.bdColor ||
      props.theme.color.card.white};
  border-radius: ${(props?: any) => props.theme.cardVariable.borderRadius}px;
  ${(props?: any) =>
    props.isShadow &&
    `
    shadow-color: #00000029;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.20;
    shadow-radius: 2.22px;
    elevation: 3;
  `};
  padding: 10px;
  background-color: ${(props?: any) =>
    props.theme.color.card[props?.bgColor] ||
    props.bgColor ||
    props.theme.color.card.white};
`;
