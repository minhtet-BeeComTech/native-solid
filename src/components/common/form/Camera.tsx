import React, { useState, useEffect } from "react";
import { View } from "react-native";
// import {
//   useCameraDevices,
//   Camera,
//   CameraPermissionStatus,
// } from 'react-native-vision-camera'

import { CameraPermissionCom } from "../permission";
import { LoaderCom } from "../layout";

export const CameraCom = (props: any) => {
  // const devices = useCameraDevices()
  // const device = devices.back
  // const [cameraPermission, setCameraPermission] =
  //   useState<CameraPermissionStatus>()
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   Camera.getCameraPermissionStatus().then(setCameraPermission)
  //   setIsLoading(false)
  // }, [])

  // if (!device || cameraPermission == null || isLoading) {
  //   return <LoaderCom loadingBgColor='transparent' isLoading={true} />
  // }

  // const showPermissionsPage = cameraPermission !== 'authorized'

  // return showPermissionsPage ? (
  //   <CameraPermissionCom handlePermission={setCameraPermission} {...props} />
  // ) : (
  //   <Camera
  //     style={{ width: '100%', height: '100%' }}
  //     device={device}
  //     isActive={true}
  //     {...props}
  //   />
  // )
  return <View></View>;
};
