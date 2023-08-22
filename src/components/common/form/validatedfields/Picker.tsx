import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { PickerCom } from "../fields";

export const VPicker: React.FC<FormComponents.VPicker> = ({
  name,
  rules,
  defaultValue = "",
  ...props
}) => {
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
    setValue,
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  const onChange = (data: any) => {
    const currentData = data;
    console.log("currentData", name, currentData);
    setValue(name, currentData);
    formContext.trigger(name);
  };

  return (
    <PickerCom
      value={field.value}
      onChange={onChange}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
