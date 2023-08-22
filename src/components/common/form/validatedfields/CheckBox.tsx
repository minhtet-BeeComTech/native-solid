import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { CheckBoxCom } from "../fields";

export const VCheckBox: React.FC<FormComponents.VCheckBox> = ({
  name,
  rules,
  defaultValue = false,
  ...props
}) => {
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  return (
    <CheckBoxCom
      value={field.value}
      onValueChange={field.onChange}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
