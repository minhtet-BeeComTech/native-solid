import React, { memo } from "react";

import { StyledRow } from "../../../theme";

export const Row: React.FC<CommonComponents.RowCom> = memo(
  ({ children, ...props }) => {
    return <StyledRow {...props}>{children}</StyledRow>;
  }
);
