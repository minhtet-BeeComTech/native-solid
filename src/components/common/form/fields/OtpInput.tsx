import React, { useEffect, useContext, useRef } from "react";
import { useWindowDimensions } from "react-native";
import { ThemeContext } from "styled-components";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const SCREEN_PADDING = 20;
const INPUT_MARGIN = 10;
const INPUT_HEIGHT = 60;
const FIELD_HEIGHT = INPUT_HEIGHT + 20;

type OtpInputProps = {
  pinCount: number;
  width?: number | `${number}%`;
  focus?: boolean;
  handleCodeChanged?: (code: string) => void;
  handleCodeFilled?: (code: string) => void;
  secureTextEntry?: boolean;
  onCodeChanged?: any;
};

export const OtpInputCom: React.FC<OtpInputProps> = ({
  pinCount,
  width = "100%",
  focus = true,
  handleCodeChanged,
  handleCodeFilled,
  ...props
}) => {
  const dimensions = useWindowDimensions();
  const themeContext = useContext(ThemeContext);
  const otpRef = useRef<any>(null);

  let inputWidth = 40;

  if (typeof width === "string") {
    inputWidth =
      ((dimensions.width / 100) * parseInt(width) -
        SCREEN_PADDING -
        INPUT_MARGIN * pinCount) /
      pinCount;
  }

  useEffect(() => {
    if (focus) {
      setTimeout(() => otpRef?.current?.focusField(0), 250);
    }
  }, []);

  return (
    <OTPInputView
      ref={otpRef}
      pinCount={pinCount}
      autoFocusOnLoad={false}
      selectionColor={themeContext.color.typo.text}
      codeInputFieldStyle={{
        width: inputWidth,
        height: INPUT_HEIGHT,
        fontSize: 20,
        color: themeContext.color.typo.text,
        backgroundColor: themeContext.color.form.inputBgColor,
        borderColor: themeContext.color.form.inputBdColor,
        borderRadius: 12,
      }}
      codeInputHighlightStyle={{
        borderColor: themeContext.color.form.primary30,
      }}
      style={{
        width,
        height: FIELD_HEIGHT,
        alignSelf: "center",
      }}
      onCodeChanged={handleCodeChanged}
      onCodeFilled={handleCodeFilled}
      {...props}
    />
  );
};
