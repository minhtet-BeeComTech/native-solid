import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { RadioCom } from "../fields";

export const VRadio: React.FC<FormComponents.VRadio> = ({
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
    <RadioCom
      value={field.value}
      onValueChange={field.onChange}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
