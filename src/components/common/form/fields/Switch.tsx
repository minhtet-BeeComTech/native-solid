import React, { useState } from "react";
import { Switch } from "react-native";

import {
  SwitchContainerStyled,
  SwitchToggleStyled,
  SwitchHandleStyled,
} from "theme";
import { FieldContainer } from "./FieldContainer";

export const SwitchCom: React.FC<FormComponents.SwitchCom> = ({
  switchType = "styled",
  onValueChange,
  value = false,
  toogleProps,
  handleProps,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const toggleSwitch = () => {
    let rev_state = !isEnabled;
    setIsEnabled(rev_state);
    onValueChange && onValueChange(rev_state);
  };

  return switchType === "styled" ? (
    <FieldContainer {...props}>
      <SwitchContainerStyled>
        <SwitchToggleStyled
          value={isEnabled}
          activeOpacity={0.8}
          onPress={toggleSwitch}
          {...toogleProps}
        >
          <SwitchHandleStyled value={isEnabled} {...handleProps} />
        </SwitchToggleStyled>
      </SwitchContainerStyled>
    </FieldContainer>
  ) : (
    <FieldContainer {...props}>
      <Switch value={isEnabled} onValueChange={toggleSwitch} {...props} />
    </FieldContainer>
  );
};
