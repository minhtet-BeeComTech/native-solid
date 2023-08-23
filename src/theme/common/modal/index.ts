import { View } from "react-native";
import styled from "styled-components";

//* start Modal
export const StyledModalContainer = styled(View)``;

export const StyledModalContent = styled(View)`
  background-color: ${(props: any) =>
    props.theme.color.modal[props.modalBgColor] ||
    props.modalBgColor ||
    props.theme.color.modal.modalBgColor};
  border-radius: ${(props: any) => props.theme.modalVariable.borderRadius}px;
`;
//* end Modal
