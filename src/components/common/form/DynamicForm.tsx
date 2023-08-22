import React, { useContext } from "react";
import { View, useWindowDimensions } from "react-native";
import { ThemeContext } from "styled-components";

import { useForm } from "./hook";
import {
  FormContainer,
  VCheckBox,
  VRadio,
  VInput,
  VPicker,
  VDateTimePicker,
  VFilePicker,
  VNrcInput,
  VComboBox,
  VInlineLabel,
} from "./validatedfields";
import { TextCom } from "../typo";
import { ButtonCom } from "../button";
import { IconCom } from "../icon";
import { CardCom } from "../card";
import { FieldContainer } from "./fields";

export const DynamicFormCom = ({
  onHandleSubmit,
  renderFormHeader,
  renderFormFooter,
  renderHeader,
  renderFooter,
  btnText = "Submit",
  isRenderBtn = true,
  ...props
}: any) => {
  const { height } = useWindowDimensions();
  const themeContext = useContext(ThemeContext);
  let { initialValues, validationSchema, inputs } = useForm(props);

  let modalProps = {
    style: {
      justifyContent: "flex-end",
      margin: 0,
    },
    modalContentProps: {
      style: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 15,
        paddingBottom: 10,
        maxHeight: height / 2,
      },
    },
  };

  const handleFormFields = (data: any) => {
    let { item } = data;
    let { viewDisplay, value, ...field } = item;
    switch (viewDisplay) {
      case "input":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VInput
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              rightRender={
                field?.showSavedBiller && (
                  <CardCom
                    bgColor="primary0"
                    style={{
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      paddingLeft: 0,
                      borderWidth: 0,
                      borderRadius: 0,
                      height: 44,
                      width: 50,
                      top: -10,
                      right: -10,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    }}
                    onPress={() => {}}
                  >
                    <IconCom
                      name="ios-copy-outline"
                      type="Ionicons"
                      color="white10"
                      iconSize={24}
                    />
                  </CardCom>
                )
              }
              {...field}
            />
          </View>
        );
      case "inputMask":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VInput
              name={item?.fieldName}
              style={{ height: 100, textAlignVertical: "top" }}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </View>
        );
      case "select":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VComboBox
              name={item?.fieldName}
              data={item?.valueRange?.packages || item?.data}
              valueName="name"
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </View>
        );
      case "selectpackage":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <TextCom>Select Package</TextCom>
          </View>
        );
      case "selectwithaction":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <TextCom>Select with action</TextCom>
          </View>
        );
      case "combobox":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VPicker
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              itemData={field?.valueRange?.packages || []}
              modalProps={modalProps}
              keyType={field?.keyName}
              valueType="name"
              isCapitalize
              {...field}
            />
          </View>
        );
      case "datetime":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VDateTimePicker
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </View>
        );
      case "labelInline":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VInlineLabel name={item?.fieldName} {...field} />
          </View>
        );
      case "label":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <TextCom>label</TextCom>
          </View>
        );
      case "file":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VFilePicker
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </View>
        );
      case "textarea":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VInput
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              multiline={true}
              numberOfLinee={5}
              scrollEnabled={false}
              style={{ height: 100, textAlignVertical: "top" }}
              {...field}
            />
          </View>
        );
      case "checkbox":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VCheckBox
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </View>
        );
      case "radio":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <VRadio
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </View>
        );
      case "image":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <TextCom>image</TextCom>
          </View>
        );
      case "title":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <TextCom>title</TextCom>
          </View>
        );
      case "selectwithsubscreen":
        return (
          <View {...item?.dynamicFieldContainerProps}>
            <TextCom>select with sub screen</TextCom>
          </View>
        );
      case "line": {
        return (
          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: themeContext?.color?.form?.white || "#fafafa",
            }}
            {...item?.dynamicFieldContainerProps}
          />
        );
      }
      case "nrcinput":
        return (
          <FieldContainer {...item?.dynamicFieldContainerProps}>
            <VNrcInput
              name={item?.fieldName}
              required={item?.validation?.find(
                (x: any) => x?.type === "required"
              )}
              {...field}
            />
          </FieldContainer>
        );
      default:
        return;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderHeader && renderHeader}
      <FormContainer
        defaultValues={initialValues}
        validationSchema={validationSchema}
        formRef={props.formRef}
      >
        {(formProps: any) => (
          <>
            {renderFormHeader && renderFormHeader(formProps)}
            {inputs?.length > 0 &&
              inputs.map((x: any, i: any) => (
                <View key={i}>
                  {handleFormFields({ item: x, index: i, formProps })}
                </View>
              ))}
            {isRenderBtn && (
              <>
                {renderFormFooter ? (
                  renderFormFooter(formProps)
                ) : (
                  <ButtonCom
                    color="white"
                    activityIndicatorColor="white"
                    appearance="gradient"
                    onPress={formProps.handleSubmit(onHandleSubmit)}
                    text={
                      formProps?.isSubmitting ? `${btnText} ...` : `${btnText}`
                    }
                  />
                )}
              </>
            )}
          </>
        )}
      </FormContainer>
      {renderFooter && renderFooter}
    </View>
  );
};
