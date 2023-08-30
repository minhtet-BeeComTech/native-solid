import React, { memo } from "react";

import { StyledFooterFix } from "../../../theme";

export const FooterFixCom: React.FC<CommonComponents.FooterFixCom> = memo(
  ({ children, ...props }) => {
    return <StyledFooterFix {...props}>{children}</StyledFooterFix>;
  }
);

FooterFixCom.defaultProps = {
  edges: ["bottom", "left", "right"],
};
