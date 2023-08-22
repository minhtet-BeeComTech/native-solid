import React from "react";
import { View } from "react-native";

import { ModalCom } from "./Modal";
import { TextCom } from "../typo";
import { ButtonCom } from "../button";

export const DialogCom: React.FC<CommonComponents.DialogCom> = ({
  handleClose,
  renderChild,
  isModalHeader = true,
  isModalBody = true,
  isModalFooter = true,
  renderModalHeader,
  title,
  renderModalBody,
  description,
  subDescription,
  renderModalFooter,
  handleLeftBtn,
  handleRightBtn,
  leftBtnProps,
  rightBtnProps,
  isAlway = false,
  titleColor,
  dialogContainerProps,
  dialogBodyContainerProps,
  dialogHeaderContainerProps,
  dialogFooterContainerProps,
  ...props
}) => {
  const onHandleClose = () => {
    if (!isAlway) {
      handleClose();
    }
  };

  return (
    <ModalCom
      onSwipeComplete={onHandleClose}
      onBackButtonPress={onHandleClose}
      onBackdropPress={onHandleClose}
      setIsVisible={onHandleClose}
      swipeDirection={["up", "down"]}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      {...props}
    >
      {renderChild ? (
        renderChild
      ) : (
        <View style={{ padding: 10 }} {...dialogContainerProps}>
          {isModalHeader && (
            <View {...dialogHeaderContainerProps}>
              {renderModalHeader ? (
                renderModalHeader
              ) : (
                <View style={{ marginBottom: 12 }}>
                  {title && (
                    <TextCom
                      weight="lg"
                      size="lg"
                      textAlign="center"
                      color={titleColor || "text"}
                    >
                      {title}
                    </TextCom>
                  )}
                </View>
              )}
            </View>
          )}
          {isModalBody && (
            <View {...dialogBodyContainerProps}>
              {renderModalBody ? (
                renderModalBody
              ) : (
                <>
                  <View style={{ marginBottom: 15 }}>
                    {description && (
                      <TextCom textAlign="center">{description}</TextCom>
                    )}
                    {subDescription && (
                      <TextCom textAlign="center">{subDescription}</TextCom>
                    )}
                  </View>
                  {!isModalFooter && (
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1 }}>
                        <ButtonCom
                          appearance="gradient"
                          text="OK"
                          onPress={onHandleClose}
                          {...rightBtnProps}
                        />
                      </View>
                    </View>
                  )}
                </>
              )}
            </View>
          )}
          {isModalFooter && (
            <View {...dialogFooterContainerProps}>
              {renderModalFooter ? (
                renderModalFooter
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flex: 1, marginRight: 10 }}>
                    <ButtonCom
                      text="Cancel"
                      bgColor="gray30"
                      onPress={handleLeftBtn}
                      {...leftBtnProps}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <ButtonCom
                      text="Confirm"
                      onPress={handleRightBtn}
                      {...rightBtnProps}
                    />
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </ModalCom>
  );
};
