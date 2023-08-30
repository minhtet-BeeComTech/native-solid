import React, { memo } from "react";

import { StyledCol } from "../../../theme";

export const Col: React.FC<CommonComponents.ColCom> = memo(
  ({ children, ...props }) => {
    return <StyledCol {...props}>{children}</StyledCol>;
  }
);
