import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const useValidation = { Yup };

export const FormContainer = ({
  children,
  validationSchema,
  defaultValues,
  formRef,
  ...props
}: any) => {
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  if (formRef) {
    formRef.current = formMethods;
  }

  return <FormProvider {...formMethods}>{children(formMethods)}</FormProvider>;
};
