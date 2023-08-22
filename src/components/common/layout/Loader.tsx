import React, { memo } from "react";

import { LottieAnimateCom } from "../animate";
import { StyledLoader } from "theme";

export const LoaderCom: React.FC<CommonComponents.LoaderCom> = memo(
  ({ children, ...props }: any) => {
    const { type, isLoading } = props;

    return (
      <>
        {type === "screen" && isLoading && (
          <StyledLoader {...props}>
            {children ? (
              children
            ) : (
              <LottieAnimateCom
                style={{ width: 50, height: 50 }}
                source={require("assets/animations/LogoLoading.json")}
                loop
                autoPlay
              />
            )}
          </StyledLoader>
        )}
      </>
    );
  }
);

LoaderCom.defaultProps = {
  type: "screen",
};
