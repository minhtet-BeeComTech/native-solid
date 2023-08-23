import {
  Platform,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import { Picker } from "@react-native-picker/picker";

//* input field wrapper
export const StyledFieldContainer = styled(View)`
  position: relative;
`;

//* text and textArea input
export const StyledInputContainer = styled(View)`
  position: relative;
`;
type StyledInputProps = {
  editable?: any;
  isError?: boolean;
};
export const StyledInput = styled(TextInput)<StyledInputProps>`
  background-color: ${(props?: any) =>
    props.theme.color.form[props?.inputBgColor] ||
    props?.inputBgColor ||
    props.theme.color.form.inputBgColor};
  color: ${(props?: any) => props.theme.color.typo.text};
  border-width: ${(props?: any) => props.theme.formVariable.borderWidth}px;
  border-color: ${(props?: any) =>
    props?.isError
      ? props.theme.color.form.error40
      : props.theme.color.form[props?.inputBdColor] ||
        props?.inputBdColor ||
        props.theme.color.form.inputBdColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  height: 44px;
  padding-left: ${(props?: any) =>
    props.iconLeftName || props.leftRender ? 40 : 15}px;
  align-items: flex-start;
  font-size: ${(props?: any) => {
    let size =
      props.theme.fontSize[props?.size] ||
      props.size ||
      props.theme.fontSize.md;
    return size;
  }}px;
  /* shadow-color: #00000029;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.20;
  shadow-radius: 2.22px;
  elevation: 3; */
`;

//* start radio button
export const StyledRadioCon = styled(TouchableOpacity)`
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
`;

type StyledRadioCircleProps = {
  value?: any;
};
export const StyledRadioCircle = styled(View)<StyledRadioCircleProps>`
  ${(props?: any) =>
    `background-color: ${
      props.value ? props.theme.color.form.radio_container : "transparent"
    }`};
  border-color: ${(props?: any) =>
    props.theme.color.form[props.RadioBdColor] ||
    props.RadioBdColor ||
    props.theme.color.form.RadioBdColor};
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;
export const StyledRB = styled(View)`
  background-color: ${(props?: any) =>
    props.theme.color.form[props.activeRBgColor] ||
    props.activeRBgColor ||
    props.theme.color.form.activeRBgColor};
  width: 12px;
  height: 12px;
  border-radius: 50px;
`;
//* end radio button

//* start checkBox
export const StyledCheckBoxCon = styled(TouchableOpacity)`
  /* margin-bottom: 10px; */
  align-items: center;
  flex-direction: row;
`;

type StyledCheckBoxProps = {
  value?: any;
};
export const StyledCheckBox = styled(View)<StyledCheckBoxProps>`
  ${(props?: any) =>
    `background-color: ${props.theme.color.form.checkboxBgColor}`};
  border-color: ${(props?: any) => props.theme.color.form.checkboxBgColor};
  width: 20px;
  height: 20px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 5px;
`;
export const StyledTick = styled(View)`
  border-bottom-color: ${(props?: any) =>
    props.theme.color.form.check_selected};
  border-right-color: ${(props?: any) => props.theme.color.form.check_selected};
  width: 5px;
  height: 12px;
  top: -1px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  transform: rotate(45deg);
`;
/* ${(props?: any) => `background-color: ${props.value ? props.theme.color.form.radio_container : 'transparent'}`}; */
// background-color: transparent;
//* end checkBox

//* file upload button
export const StyledFileUpload = styled(TouchableOpacity)`
  background-color: ${(props?: any) => props.theme.color.form.inputBgColor};
  border-color: ${(props?: any) => props.theme.color.form.borderColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  width: 100%;
  height: 40px;
  border-width: 1px;
  padding-left: 10px;
`;

//* image upload button
export const StyledImagePicker = styled(TouchableOpacity)`
  background-color: ${(props?: any) => props.theme.color.form.inputBgColor};
  border-color: ${(props?: any) => props.theme.color.form.borderColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  width: 100%;
  height: 40px;
  border-width: 1px;
  padding-left: 10px;
`;
//* end image picker

//* qr upload button
export const StyledQrInput = styled(TouchableOpacity)`
  background-color: ${(props?: any) => props.theme.color.form.inputBgColor};
  border-color: ${(props?: any) => props.theme.color.form.borderColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  width: 100%;
  height: 40px;
  border-width: 1px;
  padding-left: 10px;
`;

//* start picker input
export const StyledPickerContainer = styled(View)`
  border-color: ${(props?: any) => props.theme.color.form.borderColor};
  background-color: ${(props?: any) =>
    props.inputBgColor || props.theme.color.form.inputBgColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  border-width: 1px;
  padding: 0;
  margin: 0;
`;
export const StyledPicker = styled(Picker)`
  height: ${Platform.OS === "ios" ? "auto" : "40px"};
  margin-top: -5px;
  margin-bottom: 5px;
  margin-left: -6px;
  margin-right: -6px;
`;
export const StyledPickerItem = styled(Picker.Item)`
  padding-left: 10px;
`;
//* end picker

//* start custom picker input
type StyledCustomPickerContainerProps = {
  isError?: boolean;
};
export const StyledCustomPickerContainer = styled(
  View
)<StyledCustomPickerContainerProps>`
  background-color: ${(props?: any) =>
    props.theme.color.form[props.inputBgColor] ||
    props.inputBgColor ||
    props.theme.color.form.inputBgColor};
  border-width: ${(props?: any) => props.theme.formVariable.borderWidth}px;
  border-color: ${(props?: any) =>
    props?.isError
      ? props.theme.color.form.error40
      : props.theme.color.form[props?.inputBdColor] ||
        props?.inputBdColor ||
        props.theme.color.form.inputBdColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  position: relative;
  height: 45px;
  overflow: hidden;
  /* shadow-color: #00000029;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.20;
  shadow-radius: 2.22px;
  elevation: 3; */
`;
export const StyledCustomPickerContent = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
`;
export const StyledCustomPicker = styled(ScrollView)``;
export const StyledCustomPickerItem = styled(TouchableOpacity)`
  padding: 13px 10px;
`;
//* end picker

//* datetimepicker
export const StyledDateTimePicker = styled(TouchableOpacity)`
  background-color: ${(props?: any) => props.theme.color.form.inputBgColor};
  border-color: ${(props?: any) => props.theme.color.form.borderColor};
  border-radius: ${(props?: any) => props.theme.formVariable.borderRadius}px;
  position: relative;
  justify-content: center;
  padding-left: 10px;
  height: 40px;
  border-width: 1px;
`;

export const StyledPickerWrapper = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

//* Switch
type StyledSwitchProps = {
  value?: any;
};
export const SwitchContainerStyled = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SwitchToggleStyled = styled(TouchableOpacity)<StyledSwitchProps>`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props?: any) =>
    props.value
      ? props.theme.color.form[props.switchEnableBgColor] ||
        props.switchEnableBgColor ||
        props.theme.color.form.switchEnableBgColor
      : props.theme.color.form[props.switchUnableBgColor] ||
        props.switchUnableBgColor ||
        props.theme.color.form.switchUnableBgColor};
`;

export const SwitchHandleStyled = styled(View)<StyledSwitchProps>`
  width: 21px;
  height: 21px;
  border-radius: ${(props: any) => 21 / 2}px;
  background-color: ${(props?: any) =>
    props.value
      ? props.theme.color.form[props.switchEnableHandleColor] ||
        props.switchEnableHandleColor ||
        props.theme.color.form.switchEnableHandleColor
      : props.theme.color.form[props.switchUnableHandleColor] ||
        props.switchUnableHandleColor ||
        props.theme.color.form.switchUnableHandleColor};
  transform: translateX(${(props?: any) => (props.value ? "24px" : "2px")});
`;
//* end Switch
