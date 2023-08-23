import "styled-components";

import * as themeConfig from "../theme/attributes";

declare module "styled-components" {
  type BaseConfig = typeof themeConfig;
  type Component = typeof themeConfig.lightColor;

  export interface DefaultTheme extends BaseConfig {
    color: Component;
  }
}
