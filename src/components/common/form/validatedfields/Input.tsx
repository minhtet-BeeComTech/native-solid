import React, { useEffect, useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { mask, unMask } from "react-native-mask-text";

import { InputCom } from "../fields";

export const VInput: React.FC<FormComponents.VInput> = ({
  name,
  rules,
  defaultValue = "",
  maskPattern,
  maskType = "custom",
  autoCapitalize = "sentences",
  maskOptions,
  ...props
}) => {
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  //* mask circle
  const getMaskedValue = (value: string) =>
    mask(value, maskPattern, maskType, maskOptions, autoCapitalize);
  const getUnMaskedValue = (value: string) =>
    unMask(value, maskType as "custom" | "currency");
  const defaultValueCustom = defaultValue || "";
  const defaultValueCurrency = defaultValue || "0";
  const initialMaskedValue = getMaskedValue(
    maskType === "currency" ? defaultValueCurrency : defaultValueCustom
  );
  const initialUnMaskedValue = getUnMaskedValue(
    maskType === "currency" ? defaultValueCurrency : defaultValueCustom
  );
  const [maskedValue, setMaskedValue] = useState(initialMaskedValue);
  const [unMaskedValue, setUnmaskedValue] = useState(initialUnMaskedValue);
  const [isInitialRender, setIsInitialRender] = useState(true);
  let actualValue =
    maskPattern || maskType === "currency" ? maskedValue : field.value;

  useEffect(() => {
    if (maskPattern) {
      if (isInitialRender) {
        setIsInitialRender(false);
        return;
      }

      field.onChange(unMaskedValue);
    }
  }, [maskedValue, unMaskedValue]);

  useEffect(() => {
    if (field.value) {
      setMaskedValue(getMaskedValue(field.value));
      setUnmaskedValue(getUnMaskedValue(field.value));
    } else {
      setMaskedValue(initialMaskedValue);
      setUnmaskedValue(initialUnMaskedValue);
    }
  }, [field.value]);

  const onChange = (value: string) => {
    if (maskPattern) {
      const newUnMaskedValue = unMask(value, maskType as "custom" | "currency");
      const newMaskedValue = mask(
        newUnMaskedValue,
        maskPattern,
        maskType,
        maskOptions
      );

      setMaskedValue(newMaskedValue);
      setUnmaskedValue(newUnMaskedValue);
    } else {
      field.onChange(value);
    }
  };
  //* end mask circle

  const handleReset = () => {
    formContext.reset({
      [name]: "",
    });
  };

  return (
    <InputCom
      value={actualValue}
      onChangeText={onChange}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      onReset={handleReset}
      maxLength={maskPattern?.length || undefined}
      {...props}
    />
  );
};
