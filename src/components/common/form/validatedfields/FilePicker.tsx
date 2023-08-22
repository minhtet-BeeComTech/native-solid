import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { FilePickerCom } from "../fields";

export const VFilePicker: React.FC<FormComponents.VPicker> = ({
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

  return (
    <FilePickerCom
      value={field.value}
      handleChange={(data: any) => setValue(name, data)}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
