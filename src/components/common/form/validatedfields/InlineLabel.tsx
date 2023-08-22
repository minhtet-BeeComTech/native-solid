import React from "react";
import { useFormContext, useController } from "react-hook-form";

import { InlineLabelCom } from "../fields";

export const VInlineLabel: React.FC<FormComponents.VInput> = ({
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
    <InlineLabelCom
      value={field.value}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
