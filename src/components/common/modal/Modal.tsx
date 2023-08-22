import React, { useEffect, memo } from "react";
import Modal from "react-native-modal";
import {
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StatusBar,
} from "react-native";

import { StyledModalContainer, StyledModalContent } from "theme";

let { height } = Dimensions.get("screen");
export const ModalCom: React.FC<CommonComponents.ModalCom> = memo(
  ({ isTimer, isAlway, modalContainerProps, modalContentProps, ...props }) => {
    const { children, isVisible, setIsVisible } = props;

    useEffect(() => {
      isTimer &&
        isVisible &&
        setTimeout(() => {
          handleClose();
        }, 3000);
    }, [isTimer, isVisible]);

    const handleClose = () => {
      if (!isAlway) {
        setIsVisible(!isVisible);
      }
    };

    return (
      <Modal
        isVisible={isVisible}
        onSwipeComplete={handleClose}
        onBackButtonPress={handleClose}
        onBackdropPress={handleClose}
        swipeDirection={["up", "down"]}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        statusBarTranslucent
        useNativeDriver
        useNativeDriverForBackdrop
        customBackdrop={
          <TouchableWithoutFeedback onPress={handleClose}>
            <View
              style={{
                backgroundColor: "black",
                opacity: 0.7,
                height: height + (StatusBar?.currentHeight || 0),
              }}
            />
          </TouchableWithoutFeedback>
        }
        {...props}
      >
        <StyledModalContainer {...modalContainerProps}>
          <StyledModalContent {...modalContentProps}>
            {children}
          </StyledModalContent>
        </StyledModalContainer>
      </Modal>
    );
  }
);
