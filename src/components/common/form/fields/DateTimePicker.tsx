import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

import { StyledDateTimePicker } from "../../../../theme";
import { FieldContainer } from "./FieldContainer";
import { TextCom } from "../../typo";

export const DateTimePickerCom: React.FC<FormComponents.DateTimerPickerCom> = ({
  opendatePicker,
  show,
  ...props
}) => {
  const { value, placeholder, leftRender, rightRender } = props;
  return (
    <FieldContainer {...props}>
      <StyledDateTimePicker onPress={opendatePicker} {...props}>
        {leftRender && (
          <View
            style={{ position: "absolute", top: 10, left: 10, elevation: 4 }}
          >
            {leftRender}
          </View>
        )}
        {value ? (
          <TextCom>{format(new Date(value), "dd-MM-yyyy")}</TextCom>
        ) : (
          <TextCom color="gray30">{placeholder}</TextCom>
        )}
        {rightRender && (
          <View style={{ position: "absolute", top: 9, right: 10 }}>
            {rightRender}
          </View>
        )}
      </StyledDateTimePicker>
      {show && <DateTimePicker {...props} />}
    </FieldContainer>
  );
};
