import React, { useState, useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components";

import {
  StyledCustomPickerContent,
  StyledCustomPicker,
  StyledCustomPickerItem,
  StyledCustomPickerContainer,
} from "theme";
import { FieldContainer } from "./FieldContainer";
import { IconCom } from "../../icon";
import { TextCom } from "../../typo";
import { ModalCom } from "../../modal";
import { CardCom } from "../../card";
import { EmptyBoxCom } from "../../result";

export const PickerCom: React.FC<FormComponents.PickerCom> = ({
  itemData,
  value,
  onChange,
  mode,
  placeholder,
  keyType,
  valueType,
  renderTitle,
  customRender,
  modalProps,
  customModalRender,
  handleIsModalVisible,
  pickerContainerProps,
  isDropDown = false,
  renderPickerItem,
  pickerProps,
  customPickerItemProps,
  ...props
}) => {
  const themeContext = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchKey, setSearchKey]: any = useState(null);
  const isError = Boolean(props.error);

  const onHandle = (data: any, index: number) => {
    if (value !== data) {
      onChange && onChange(data, index);
    } else {
      onChange && onChange("");
    }
    setModalVisible(!modalVisible);
  };

  let tmp =
    value &&
    itemData?.length > 0 &&
    itemData.find((x: any) => x[keyType] === value);

  const handleSearch = () => {
    console.log("filterObj");
  };

  const getDataSearch = () => {
    if (!searchKey) {
      return itemData;
    }

    const filteredArray = itemData.filter(
      (x: any) => x.value.toLowerCase().indexOf(searchKey?.toLowerCase()) !== -1
    );
    return filteredArray;
  };

  return (
    <FieldContainer isFocus={value !== ""} {...props}>
      <StyledCustomPickerContainer
        isError={isError}
        {...props}
        {...pickerContainerProps}
      >
        <StyledCustomPickerContent
          onPress={() =>
            handleIsModalVisible
              ? handleIsModalVisible(!modalVisible)
              : setModalVisible(!modalVisible)
          }
          {...pickerProps}
        >
          {customRender ? (
            customRender(value)
          ) : (
            <>
              <TextCom
                style={{ marginLeft: 10 }}
                numberOfLines={1}
                color={tmp ? "text" : "text"}
              >
                {tmp ? tmp[valueType] : placeholder}
              </TextCom>
              <IconCom
                name="keyboard-arrow-down"
                iconSize={25}
                color="#707070"
                style={{ position: "absolute", top: 10, right: 5 }}
              />
            </>
          )}
          {props.iconLeftName && (
            <IconCom
              name={props.iconLeftName}
              type={props.type}
              iconSize="xl"
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                elevation: 4,
              }}
            />
          )}
          {props.leftRender && (
            <View
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                elevation: 4,
              }}
            >
              {props.leftRender}
            </View>
          )}
          {props.iconRightName && (
            <IconCom
              name={props.iconRightName}
              type={props.type}
              iconSize="xl"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                elevation: 4,
              }}
            />
          )}
          {props.rightRender && (
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                elevation: 4,
              }}
            >
              {props.rightRender}
            </View>
          )}
        </StyledCustomPickerContent>
      </StyledCustomPickerContainer>
      {modalVisible && isDropDown && (
        <CardCom
          bgColor={themeContext?.color?.form?.inputBgColor || "bgColor"}
          style={{
            position: "absolute",
            top: 46,
            width: "100%",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderRadius: 0,
            borderWidth: 0,
          }}
        >
          {customModalRender ? (
            customModalRender(props)
          ) : (
            <StyledCustomPicker showsVerticalScrollIndicator={false}>
              {getDataSearch()?.length > 0 &&
                getDataSearch().map((x: any, i: number) => (
                  <StyledCustomPickerItem
                    key={i}
                    onPress={() => onHandle(x[keyType], i)}
                    style={{
                      borderBottomWidth:
                        getDataSearch()?.length === i + 1 ? 0 : 1,
                      borderColor: themeContext?.color?.modal?.gray50,
                    }}
                  >
                    {renderPickerItem ? (
                      renderPickerItem(x, i)
                    ) : (
                      <TextCom color="text" size="sm">
                        {x[valueType]}
                      </TextCom>
                    )}
                  </StyledCustomPickerItem>
                ))}
            </StyledCustomPicker>
          )}
        </CardCom>
      )}
      {!isDropDown && (
        <ModalCom
          isVisible={modalVisible}
          setIsVisible={(value: boolean) =>
            handleIsModalVisible
              ? handleIsModalVisible(value)
              : setModalVisible(value)
          }
          {...modalProps}
        >
          {customModalRender ? (
            customModalRender(props)
          ) : (
            <StyledCustomPicker showsVerticalScrollIndicator={false}>
              {getDataSearch()?.length > 0 ? (
                getDataSearch().map((x: any, i: number) => (
                  <StyledCustomPickerItem
                    key={i}
                    onPress={() => onHandle(x[keyType], i)}
                    {...customPickerItemProps}
                  >
                    {renderPickerItem ? (
                      renderPickerItem(x, i)
                    ) : (
                      <TextCom color="text" size="sm">
                        {x[valueType]}
                      </TextCom>
                    )}
                  </StyledCustomPickerItem>
                ))
              ) : (
                <EmptyBoxCom />
              )}
            </StyledCustomPicker>
          )}
        </ModalCom>
      )}
    </FieldContainer>
  );
};
