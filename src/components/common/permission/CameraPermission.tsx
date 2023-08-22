import React, { useContext } from "react";
import {
  View,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ImageCom } from "../image";
import { TextCom } from "../typo";
import { ButtonCom } from "../button";

export const CameraPermissionCom = ({
  navigation,
  children,
  handlePermission,
  ...props
}: any) => {
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const onHandlePermission = async () => {
    if (Platform.OS === "ios") {
      handlePermission("authorized");
    }
    if (Platform.OS === "android") {
      const cameraPermissionStatus = await checkCameraPeremission();
      if (!cameraPermissionStatus) {
        requestCameraPermission();
      }
    }
  };

  const checkCameraPeremission = async () => {
    const cameraPermissionStatus = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    return cameraPermissionStatus;
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handlePermission("authorized");
      } else {
        handlePermission("denied");
      }
    } catch (error) {
      console.warn("Error requesting camera permission:", error);
    }
  };

  return children ? (
    children
  ) : (
    <View
      style={{ paddingHorizontal: 15, marginTop: insets.top + 20, flex: 1 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <TextCom>H1</TextCom>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextCom>H2</TextCom>
        </TouchableOpacity>
      </View>
      <TextCom size="xxl" weight="lg">
        Allow Camera Access
      </TextCom>
      <TextCom style={{ marginBottom: 39 }}>
        To get started, we'll need to confirm your identity. It will only take a
        minute.
      </TextCom>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          flex: 1,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageCom
            source={require("assets/images/onboarding4.png")}
            style={{ width: 320, height: 320, backgroundColor: "transparent" }}
          />
        </View>
        <ButtonCom text="Allow" onPress={onHandlePermission} />
      </View>
    </View>
  );
};
