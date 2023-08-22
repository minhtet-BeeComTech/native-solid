import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { ComboBoxCom } from "../fields";

export const VComboBox: React.FC<FormComponents.VComboBox> = ({
  name,
  rules,
  defaultValue = "",
  ...props
}) => {
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  return (
    <ComboBoxCom
      value={field.value}
      handleBlur={field.onBlur}
      onChange={field.onChange}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
