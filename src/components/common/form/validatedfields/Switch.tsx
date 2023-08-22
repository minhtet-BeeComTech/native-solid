import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { SwitchCom } from "../fields";

export const VSwitch: React.FC<FormComponents.VSwitch> = ({
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
    <SwitchCom
      value={field.value}
      onValueChange={field.onChange}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
