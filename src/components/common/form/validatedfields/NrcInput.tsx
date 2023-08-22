import React, { useRef } from "react";
import { useFormContext, useController } from "react-hook-form";

import { NrcInputCom } from "../fields";

export const VNrcInput: React.FC<FormComponents.VNrcInput> = ({
  name,
  rules,
  defaultValue = "",
  ...props
}) => {
  const ref = useRef(1);
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
    setValue,
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  const onChange = (data: any) => {
    const currentData = data;
    setValue(name, currentData);
    ref?.current > 4 && formContext.trigger(name);
    ref.current += 1;
  };

  return (
    <NrcInputCom
      selectedValue={field.value}
      onHandleChange={onChange}
      handleBlur={field.onBlur}
      error={errors?.[name]?.message}
      {...props}
    />
  );
};
