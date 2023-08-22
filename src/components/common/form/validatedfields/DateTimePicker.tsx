import React, { useState } from "react";
import { Platform } from "react-native";
import { useFormContext, useController } from "react-hook-form";

import { DateTimePickerCom } from "../fields";

export const VDateTimePicker: React.FC<FormComponents.VDateTimePicker> = ({
  name,
  rules,
  defaultValue = new Date(),
  ...props
}) => {
  const formContext = useFormContext();
  const [show, setShow] = useState(false);
  const {
    control,
    formState: { errors },
    setValue,
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || field.value;
    setShow(Platform.OS === "ios");
    setValue(name, currentDate);
  };

  return (
    <DateTimePickerCom
      value={field.value || new Date()}
      onChange={onChange}
      show={show}
      setShow={setShow}
      opendatePicker={() => setShow(!show)}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
