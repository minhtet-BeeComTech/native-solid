import React, { memo, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemeContext } from "styled-components";

import { TextCom } from "../typo";
import { IconCom } from "../icon";
import {
  StyledHeaderContainer,
  StyledLeftContainer,
  StyledCenterContainer,
  StyledRightContainer,
} from "../../../theme";

export const HeaderCom: React.FC<CommonComponents.HeaderCom> = memo(
  ({
    headerChild,
    headerLeftRender,
    headerCenterRender,
    headerRightRender,
    headerRender,
    isHeader,
    headerTextProps,
    backIconProps,
    ...props
  }) => {
    const {
      navigation,
      text,
      back,
      menu,
      isCenter,
      handleCustomBack,
      isCustomBack,
    } = props;
    const themeContext = useContext(ThemeContext);

    const titleRouteChange = (type?: any) => () => {
      if (type === "menu") {
        navigation?.toggleDrawer();
      } else {
        isCustomBack ? handleCustomBack() : navigation?.goBack();
      }
    };

    const child = () => (
      <>
        <StyledHeaderContainer style={props.headerStyle} {...props}>
          <StyledLeftContainer>
            {headerLeftRender ? (
              headerLeftRender
            ) : (
              <View
                style={{
                  minWidth:
                    isCenter && (menu || back || headerLeftRender) ? 30 : 0,
                }}
              >
                {menu && (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={titleRouteChange("menu")}
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <IconCom
                      name="menu-outline"
                      type="Ionicons"
                      iconSize="xxxl"
                      color={
                        props.bgColor === "transparent"
                          ? themeContext.color.icon.gray500
                          : themeContext.color.icon.white
                      }
                    />
                  </TouchableOpacity>
                )}
                {back && (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={titleRouteChange("back")}
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <IconCom
                      name="chevron-thin-left"
                      type="Entypo"
                      iconSize="xl"
                      color={
                        props.bgColor === "transparent"
                          ? themeContext.color.icon.gray500
                          : themeContext.color.icon.white
                      }
                      style={{ left: -3 }}
                      {...backIconProps}
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </StyledLeftContainer>
          <StyledCenterContainer>
            {headerCenterRender ? (
              headerCenterRender
            ) : (
              <View style={{ flex: 1 }}>
                <TextCom
                  numberOfLines={1}
                  style={{ textAlign: isCenter ? "center" : "left" }}
                  size="lg"
                  weight="xl"
                  color="white"
                  {...headerTextProps}
                >
                  {text}
                </TextCom>
              </View>
            )}
          </StyledCenterContainer>
          <StyledRightContainer>
            <View
              style={{
                minWidth:
                  isCenter && (menu || back || headerLeftRender) ? 30 : 0,
              }}
            >
              {headerRightRender}
            </View>
          </StyledRightContainer>
        </StyledHeaderContainer>
        {headerChild}
      </>
    );

    if (!isHeader) {
      return null;
    }

    return headerRender ? headerRender : child();
  }
);

HeaderCom.defaultProps = {
  isCenter: true,
  isHeader: true,
};
