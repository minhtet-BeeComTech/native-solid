import { useValidation } from "../validatedfields";

type InputProps = {
  field?: any;
  validation?: any;
  dataType?: any;
};
const generateValidations = (field: InputProps) => {
  let typeValue: any = field?.dataType;
  let schema: any = useValidation.Yup[typeValue || "string"]();

  for (const rule of field.validation) {
    switch (rule?.type) {
      case "oneOf":
        schema = schema.oneOf(
          [useValidation.Yup.ref(rule?.ref_field), null],
          rule?.message
        );
        break;

      default:
        schema = schema[rule.type](rule?.message);
        break;
    }
  }

  return schema;
};

type Props = {
  formData?: any;
};
export const useForm = ({ formData, ...props }: Props) => {
  let tmpFieldList = formData?.fieldList?.filter(
    (x: any) => x?.viewDisplay !== "none"
  );
  let fieldArr: any[] = tmpFieldList;

  const handleKeyboardType = (keyboardType: string) => {
    switch (keyboardType) {
      case "default":
        return "default";
      case "number":
        return "number-pad";
      case "visible":
        return "none";
      case "email":
        return "email-address";
      default:
        return "default";
    }
  };

  const modifiedFieldArr = fieldArr.map((x: any) => {
    if (x?.value === "keyin") {
      return {
        ...x,
        value: "",
        keyboardType: handleKeyboardType(x.inputType) || x?.keyboardType,
      };
    }
    return x;
  });

  console.log("modifiedFieldArr", modifiedFieldArr);

  let initialValues: { [key: string]: any } = {};
  let validationsFields: { [key: string]: any } = {};

  for (const field of modifiedFieldArr) {
    initialValues[field.fieldName] = field.value;

    if (field?.validation?.length > 0) {
      const schema = generateValidations(field);
      validationsFields[field.fieldName] = schema;
    }
  }

  return {
    validationSchema: useValidation.Yup.object({ ...validationsFields }),
    initialValues,
    inputs: modifiedFieldArr,
  };
};
