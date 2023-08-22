import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext } from "styled-components";

import { TextCom } from "../typo";
import { CardCom } from "../card";
import { IconCom } from "../icon";

export const KeyBoardCom: React.FC<FormComponents.KeyBoardCom> = ({
  keyBoardContainerProps,
  keyContainerProps,
  pinLength = 6,
  handleDone,
  isKeyboardHeader = true,
  keyboardHeaderRender,
  title,
  description,
  ...props
}) => {
  const [inputText, setInputText] = useState("");
  const themeContext = useContext(ThemeContext);

  let tmpPinLength = new Array(pinLength).fill("");
  let keyData = [
    {
      row: 1,
      items: [
        { key: 1, value: 1 },
        { key: 2, value: 2, subValue: "ABC" },
        { key: 3, value: 3, subValue: "DEF" },
      ],
    },
    {
      row: 2,
      items: [
        { key: 4, value: 4, subValue: "GHI" },
        { key: 5, value: 5, subValue: "JKL" },
        { key: 6, value: 6, subValue: "MNO" },
      ],
    },
    {
      row: 3,
      items: [
        { key: 7, value: 7, subValue: "PQRS" },
        { key: 8, value: 8, subValue: "TUV" },
        { key: 9, value: 9, subValue: "WXYZ" },
      ],
    },
    {
      row: 4,
      items: [
        { key: "", disabled: true, value: "" },
        { key: 0, value: 0 },
        {
          key: "delete",
          value: "Delete",
          renderChild: (
            <IconCom name="delete" type="Feather" iconSize="lg" color="text" />
          ),
        },
      ],
    },
  ];

  const handleKeyPress = (key: number | string) => {
    if (key === "delete") {
      setInputText(inputText.slice(0, -1));
    } else {
      let tmpTxt = inputText + key;

      // un-lmimited pin lenght
      if (pinLength === 0) {
        setInputText(tmpTxt);
        return;
      }

      if (tmpTxt?.length <= pinLength) {
        setInputText(tmpTxt);
      }
      if (pinLength === tmpTxt?.length) {
        handleDone(tmpTxt);
      }
    }
  };

  return (
    <>
      {isKeyboardHeader &&
        (keyboardHeaderRender ? (
          keyboardHeaderRender({ tmpPinLength, inputText })
        ) : (
          <CardCom
            bgColor="keyBoardBgColor"
            style={{
              paddingVertical: 12,
              borderWidth: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <TextCom textAlign="center" weight="md" style={{ marginBottom: 7 }}>
              {title || "Please Enter Your Pin"}
            </TextCom>
            {description && (
              <TextCom
                textAlign="center"
                weight="md"
                style={{ marginBottom: 7 }}
              >
                {description}
              </TextCom>
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              {tmpPinLength.map((x: any, i: any) => (
                <View
                  key={i}
                  style={{
                    marginRight: tmpPinLength?.length - 1 === i ? 0 : 10,
                    borderBottomColor: themeContext.color.form.gray30,
                    borderBottomWidth: 1,
                    padding: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "10%",
                    height: 30,
                  }}
                >
                  <TextCom size="xs">
                    {inputText[i]?.replace(inputText[i], "●")}
                  </TextCom>
                </View>
              ))}
            </View>
          </CardCom>
        ))}
      <CardCom
        bgColor="keyBoardBgColor"
        style={[
          styles.container,
          {
            borderTopRightRadius: keyboardHeaderRender ? 5 : 0,
            borderTopLeftRadius: keyboardHeaderRender ? 5 : 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}
        {...keyBoardContainerProps}
      >
        {keyData.map((x: any, i: number) => (
          <View key={i} style={styles.row}>
            {x.items.map((y: any, index: number) => (
              <CardCom
                key={index}
                bgColor={
                  y.key === "" || y.key === "delete"
                    ? "transparent"
                    : "keyBoardKeyBgColor"
                }
                style={[
                  styles.key,
                  { marginRight: x.items.length - 1 === index ? 0 : 5 },
                ]}
                onPress={() => handleKeyPress(y.key)}
                activeOpacity={0.5}
                {...keyContainerProps}
                {...y}
              >
                {y?.renderChild ? (
                  y?.renderChild
                ) : (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextCom weight="lg">{y.value}</TextCom>
                    {(y?.subValue || y.key === 1) && (
                      <TextCom size="sm" color="gray10">
                        {y?.subValue}
                      </TextCom>
                    )}
                  </View>
                )}
              </CardCom>
            ))}
          </View>
        ))}
      </CardCom>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    borderWidth: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  key: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0,
    height: 52,
  },
});
