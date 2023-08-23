import styled, { DefaultTheme } from "styled-components";
import { View, TouchableOpacity, Text } from "react-native";

interface IStyledTabBarsHeaderItem {
  theme: DefaultTheme;
  active?: boolean;
}

interface IStyledTabBarsHeaderItemText {
  theme: DefaultTheme;
  active?: boolean;
}

export const StyledTabBarsContainer = styled(View)`
  flex: 1;
  overflow: hidden;
`;

export const StyledTabBarsHeaderContainer = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const StyledTabBarsHeaderItem = styled(
  TouchableOpacity
)<IStyledTabBarsHeaderItem>`
  margin-right: 11px;
  padding: 8px 0;F
  align-ttems: center;
  border-bottom-width: 3px;
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.color.typo.primary0 : "transparent"};
`;

export const StyledTabBarsHeaderItemText = styled(
  Text
)<IStyledTabBarsHeaderItemText>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.lg};
  color: ${({ active, theme }) =>
    active ? theme.color.typo.primary0 : theme.color.typo.gray20};
`;

export const StyledTabBarsContentContainer = styled(View)`
  margin-top: 4px;
  overflow: hidden;
`;

export const StyledTabBarsContentItemContainer = styled(View)``;
