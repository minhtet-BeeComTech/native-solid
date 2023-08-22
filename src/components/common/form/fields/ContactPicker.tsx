import React, { useState, useCallback, useContext } from "react";
import { View, PermissionsAndroid, Platform } from "react-native";
import { ThemeContext } from "styled-components";
import Contacts from "react-native-contacts";

import { ActionSheetCom } from "../ActionSheet";
import { PickerCom } from "./Picker";
import { ModalCom } from "../../modal";
import { TextCom } from "../../typo";
import { ImageCom } from "../../image";
import { IconCom } from "../../icon";

export const ContactPickerCom = ({
  contactActionSheetProps,
  contantModalProps,
  handleSelectedContact,
  ...props
}: any) => {
  const themeContext = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [subContacts, setSubContacts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactPermission = useCallback(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
        .then((res) => {
          if (res === "granted") {
            Contacts.getAll()
              .then((contacts: any) => {
                setContacts(contacts);
                setModalVisible(!modalVisible);
              })
              .catch((e) => {
                console.log(e);
              });
          }
        })
        .catch((error) => {
          console.error("Permission error: ", error);
        });
    } else {
      Contacts.getAll()
        .then((contacts: any) => {
          setContacts(contacts);
          setModalVisible(!modalVisible);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [modalVisible]);

  const onHandleChange = (data: any, i: number) => {
    if (data?.length === 1) {
      handleSelectedContact &&
        handleSelectedContact(
          data[0]?.number ? data[0]?.number?.replace(/\s/g, "") : ""
        );
    } else {
      setSubContacts(data);
      setIsVisible(true);
    }
  };

  const onHandleActionPress = (item?: string) => {
    if (item === "cancel") {
      setIsVisible(false);
    } else {
      handleSelectedContact &&
        handleSelectedContact(item ? item?.replace(/\s/g, "") : "");
      setIsVisible(false);
    }
  };

  return (
    <>
      <PickerCom
        inputBgColor="primary0"
        itemData={contacts}
        keyType="phoneNumbers"
        valueType="displayName"
        onChange={onHandleChange}
        handleIsModalVisible={handleContactPermission}
        customRender={(value: any) => (
          <View>
            <IconCom
              name="contacts"
              type="AntDesign"
              iconSize="lg"
              color="white10"
            />
          </View>
        )}
        pickerContainerProps={{
          style: {
            width: 45,
            borderWidth: 0,
          },
        }}
        pickerProps={{
          style: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        customPickerItemProps={{
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        }}
        renderPickerItem={(item: any, i: number) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
            }}
          >
            <View style={{ marginRight: 12 }}>
              <ImageCom
                source={
                  item?.hasThumbnail
                    ? { uri: item?.thumbnailPath }
                    : require("assets/images/Avatar/male.png")
                }
                thumbnailSource={
                  item?.hasThumbnail
                    ? { uri: item?.thumbnailPath }
                    : require("assets/images/Avatar/male.png")
                }
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  backgroundColor: "transparent",
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderBottomWidth: contacts?.length - 1 === i ? 0 : 1,
                borderBottomColor: themeContext?.color?.card?.bottomBdColor,
                paddingBottom: 16,
                paddingTop: 16,
              }}
            >
              <TextCom>{`${item.givenName} ${item.familyName}`}</TextCom>
            </View>
          </View>
        )}
        modalProps={{
          isVisible: modalVisible,
          style: {
            justifyContent: "flex-end",
            margin: 0,
          },
          modalContainerProps: {
            style: {
              maxHeight: "60%",
              backgroundColor: themeContext?.color?.card?.bgColor,
              paddingVertical: 12,
            },
          },
        }}
        {...props}
      />
      <ModalCom
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
        modalContentProps={{
          style: {
            borderRadius: 0,
            backgroundColor: "transparent",
            paddingHorizontal: 15,
            paddingBottom: 10,
          },
        }}
        {...contantModalProps}
      >
        <ActionSheetCom
          actionConfig={{ actions: [...subContacts, { number: "cancel" }] }}
          keyType="number"
          valueType="number"
          handleActionPress={onHandleActionPress}
          {...contactActionSheetProps}
        />
      </ModalCom>
    </>
  );
};
