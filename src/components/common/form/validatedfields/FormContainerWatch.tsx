import React from "react";
import { FormProvider } from "react-hook-form";

export const FormContainerWatch = ({
  children,
  formMethods,
  formRef,
  ...props
}: any) => {
  if (formRef) {
    formRef.current = formMethods;
  }

  return <FormProvider {...formMethods}>{children(formMethods)}</FormProvider>;
};
