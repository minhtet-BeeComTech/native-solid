import React, { memo } from "react";

import { StyledIcon } from "theme";

export const IconCom: React.FC<CommonComponents.IconCom> = memo((props) => (
  <StyledIcon {...props} />
));

IconCom.defaultProps = {
  type: "MaterialIcons",
};
