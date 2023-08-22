import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import DocumentPicker from "react-native-document-picker";
import FileViewer from "react-native-file-viewer";

import { PickerCom } from "./Picker";
import { ActionSheetCom } from "../ActionSheet";

export const FilePickerCom: React.FC<FormComponents.FilePickerCom> = ({
  renderView,
  documentPickerOptionsProps,
  handleChange,
  value,
  navigation,
  actionSheetProps,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const themeContext = useContext(ThemeContext);

  const onHandleActionPress = async (item: string) => {
    if (item === "camera") {
      //* open camera
      setModalVisible(false);
      navigation?.navigate("Camera", {
        handleChange: (value: any) => console.log("value", value),
      });
    } else if (item === "library") {
      //* open library
      let result: any = await documentPicker();
      setModalVisible(false);
      if (result?.length >= 1) {
        handleChange(result[0]);
      }
    } else if (item === "view") {
      //* open file viewer
      if (value.uri) {
        FileViewer.open(value.uri);
        setModalVisible(false);
      }
    } else {
      setModalVisible(false);
    }
  };

  const documentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.docx,
          DocumentPicker.types.pdf,
        ],
        ...documentPickerOptionsProps,
      });
      return result;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        // Error occurred
      }
    }
  };

  const handleActionConfig = () => {
    let actions = [
      {
        name: "Camera",
        value: "camera",
      },
      {
        name: "Library",
        value: "library",
      },
      {
        name: "View",
        value: "view",
      },
      {
        name: "Cancel",
        value: "cancel",
      },
    ];
    let tmp = value ? actions : actions.filter((x: any) => x?.value !== "view");
    return {
      actions: tmp,
    };
  };

  return (
    <PickerCom
      placeholder="file upload"
      value={value}
      handleIsModalVisible={() => setModalVisible(!modalVisible)}
      modalProps={{
        isVisible: modalVisible,
        style: {
          justifyContent: "flex-end",
          margin: 0,
        },
        modalContentProps: {
          style: {
            borderRadius: 0,
            backgroundColor: "transparent",
            paddingHorizontal: 15,
            paddingBottom: 10,
          },
        },
      }}
      customModalRender={(data: any) => (
        <ActionSheetCom
          actionConfig={handleActionConfig()}
          handleActionPress={onHandleActionPress}
          {...actionSheetProps}
        />
      )}
      {...props}
    />
  );
};
