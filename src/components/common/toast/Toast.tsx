import React, { View } from "react-native";
import Toast from "react-native-toast-message";

import { StyledToast } from "../../../theme";
import { TextCom } from "../typo";

const ToastType = ({ props = {}, ...otherProps }: any) => {
  return (
    Object.keys(props).length > 0 && (
      <StyledToast {...props?.toastConProps}>
        {props?.renderChild ? (
          props?.renderChild
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              <TextCom color="text" textAlign="center">
                {props?.title}
              </TextCom>
            </View>
          </View>
        )}
      </StyledToast>
    )
  );
};

const toastConfig = {
  success: (props: any) => <ToastType {...props} />,
  error: (props: any) => <ToastType {...props} />,
  info: (props: any) => <ToastType {...props} />,
};

export const ToastCom = (props: any) => {
  return <Toast bottomOffset={80} position="bottom" config={toastConfig} />;
};

export const useToast = { Toast };
