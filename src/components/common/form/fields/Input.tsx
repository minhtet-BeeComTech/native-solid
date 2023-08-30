import React, { useState, useContext, useRef } from "react";
import { TouchableOpacity, View, TextInput } from "react-native";
import { ThemeContext } from "styled-components";

import { StyledInput, StyledInputContainer } from "../../../../theme";
import { FieldContainer } from "./FieldContainer";
import { IconCom } from "../../icon";

export const InputCom: React.FC<FormComponents.InputCom> = ({
  secure,
  seedetect,
  seedetect_custom,
  iconLeftColor,
  inputStyle,
  inputRef,
  handleBlur,
  ...props
}) => {
  const themeContext = useContext(ThemeContext);
  const [isHide, setIsHide] = useState(secure ? true : false);
  const isError = Boolean(props.error);
  const [focus, setfocus] = useState(false);
  const ref = useRef<TextInput>();

  return (
    <FieldContainer isFocus={focus} {...props}>
      <StyledInputContainer>
        <StyledInput
          ref={inputRef || ref}
          placeholderTextColor={
            themeContext.color.mode === "dark"
              ? themeContext.color.typo.gray100
              : themeContext.color.typo.gray30
          }
          secureTextEntry={secure ? isHide : false}
          isError={isError}
          onBlur={() => {
            setfocus(false);
            handleBlur;
          }}
          onFocus={() => setfocus(true)}
          style={[
            props.clearable && props.value && { paddingRight: 40 },
            { ...inputStyle },
          ]}
          {...props}
        />

        {props.clearable && props.value && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 6,
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
                padding: 5,
                borderRadius: 15,
              }}
              onPress={props.onReset}
            >
              {props.renderClearableIcon ? (
                props.renderClearableIcon
              ) : (
                <IconCom
                  name="close"
                  type="AntDesign"
                  iconSize="lg"
                  color={
                    themeContext.color.mode === "dark" ? "gray40" : "gray200"
                  }
                />
              )}
            </TouchableOpacity>
          </View>
        )}

        {props.iconLeftName && (
          <IconCom
            name={props.iconLeftName}
            type={props.type}
            iconSize="xl"
            color={iconLeftColor}
            style={{ position: "absolute", top: 10, left: 10, elevation: 1 }}
          />
        )}
        {props.leftRender && (
          <View
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 3,
              elevation: 3,
            }}
          >
            {props.leftRender}
          </View>
        )}
        {(props.iconRightName || seedetect) && (
          <>
            {seedetect_custom ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ position: "absolute", top: 0, right: 0, padding: 9 }}
                onPress={() => seedetect && setIsHide(!isHide)}
              >
                {!isHide ? (
                  <IconCom name="eye-outline" type="Ionicons" iconSize="xl" />
                ) : (
                  <IconCom
                    name="eye-off-outline"
                    type="Ionicons"
                    iconSize="xl"
                  />
                )}
              </TouchableOpacity>
            ) : (
              <IconCom
                name={
                  seedetect
                    ? !isHide
                      ? "visibility"
                      : "visibility-off"
                    : props.iconRightName
                }
                type={seedetect ? "MaterialIcons" : props.type}
                iconSize="xl"
                color="desc"
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  elevation: 4,
                }}
                onPress={() => seedetect && setIsHide(!isHide)}
              />
            )}
          </>
        )}
        {props.rightRender && (
          <View
            style={{ position: "absolute", top: 10, right: 10, elevation: 4 }}
          >
            {props.rightRender}
          </View>
        )}
      </StyledInputContainer>
    </FieldContainer>
  );
};

InputCom.defaultProps = {
  seedetect_custom: true,
  placeholder: "",
};
