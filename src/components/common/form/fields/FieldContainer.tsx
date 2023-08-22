import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components";

import { StyledFieldContainer } from "theme";
import { TextCom } from "../../typo";
import { IconCom } from "../../icon";

export const FieldContainer: React.FC<FormComponents.VFieldContainer> = ({
  fieldContainerProps,
  label,
  required,
  children,
  materialLabel,
  isFocus,
  radioLabelPos,
  error,
  isShowErrMsg = true,
  ...props
}) => {
  const themeContext = useContext(ThemeContext);
  const [checkFocus, setCheckFocus] = useState(isFocus);
  const isError = Boolean(error);

  useEffect(() => {
    if (materialLabel) {
      if (isFocus) {
        setCheckFocus(true);
      } else {
        setCheckFocus(!!props?.value);
      }
    }
  }, [isFocus]);

  let radioPosition = radioLabelPos && { marginLeft: 25, marginBottom: -20 };

  return (
    <StyledFieldContainer {...fieldContainerProps}>
      {materialLabel ? (
        <View style={{ zIndex: 3, elevation: 0, marginLeft: 5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              top: checkFocus ? -15 : 5,
              left: 10,
              zIndex: 3,
              elevation: 0,
            }}
          >
            {label && checkFocus && (
              <TextCom
                style={{ zIndex: 99, lineHeight: 25 }}
                size={checkFocus ? "sm" : "md"}
                color={checkFocus ? "primary0" : "gray300"}
              >
                {label} {required ? "*" : ""}
              </TextCom>
            )}
            <View
              style={{
                position: "absolute",
                bottom: 9.1,
                left: 0,
                width: "100%",
                borderWidth: 1.5,
                borderColor: checkFocus
                  ? themeContext?.color?.form?.white
                  : "transparent",
              }}
            />
          </View>
        </View>
      ) : (
        label && (
          <TextCom
            color="label"
            weight="lg"
            numberOfLines={1}
            style={[{ marginBottom: 5.5 }, radioPosition]}
          >
            {label} {required ? "*" : ""}
          </TextCom>
        )
      )}
      <View {...props}>{children}</View>
      {isError && isShowErrMsg && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <IconCom
            name="exclamationcircle"
            iconSize="sm"
            type="AntDesign"
            color="error"
          />
          <TextCom size="xs" color="error" style={{ marginLeft: 3.5 }}>
            {error}
          </TextCom>
        </View>
      )}
      {props.desc && (
        <TextCom size="sm" color="gray" style={{ marginTop: 5 }}>
          {props.desc}
        </TextCom>
      )}
    </StyledFieldContainer>
  );
};
