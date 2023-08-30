import React, { memo } from "react";

import { StyledText } from "../../../theme";

export const TextCom: React.FC<CommonComponents.TextCom> = memo(
  ({ children, ...props }) => {
    return <StyledText {...props}>{children}</StyledText>;
  }
);
