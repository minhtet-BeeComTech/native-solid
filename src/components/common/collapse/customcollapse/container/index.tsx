import React, { forwardRef, useState, useEffect, Children } from "react";
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  LayoutChangeEvent,
} from "react-native";

import { CollapseHeader } from "../header";
import { CollapseBody } from "../body";

type CollapseContainerProps = {
  isExpanded?: boolean;
  disabled?: boolean;
  onToggle?: any;
  handleLongPress?: any;
  touchableOpacityProps?: any;
  children?: any;
  ref?: any;
};
export const CollapseContainer: React.FC<CollapseContainerProps> = forwardRef(
  (
    {
      isExpanded = false,
      disabled = false,
      onToggle = () => undefined,
      handleLongPress = () => undefined,
      touchableOpacityProps = {},
      children,
      ...restProps
    },
    ref
  ) => {
    const [show, setShow] = useState(isExpanded);
    const [contentHeight, setContentHeight] = useState(0);
    let header = null;
    let body = null;

    useEffect(() => {
      setShow(isExpanded);
    }, [isExpanded]);

    Children.forEach(children, (child) => {
      if (child.type === CollapseHeader) {
        header = child;
      } else if (child.type === CollapseBody) {
        body = child;
      }
    });

    const handleContentLayout = (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      setContentHeight(height);
    };

    const handleToggle = () => {
      onToggle(!show);
      setShow(!show);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    if (header === null) {
      console.warn(
        "header wasn't found to be rendered. Please make sure you have wrapped an CollapseHeader in the Collapse Component."
      );
      return null;
    } else {
      return (
        <View ref={ref} {...restProps}>
          <TouchableOpacity
            {...touchableOpacityProps}
            disabled={disabled}
            activeOpacity={0.7}
            delayPressIn={0}
            onPress={handleToggle}
            onLongPress={handleLongPress}
          >
            {header}
          </TouchableOpacity>
          <View onLayout={handleContentLayout}>{show && body}</View>
        </View>
      );
    }
  }
);
