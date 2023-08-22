import React, { memo, useEffect, useRef } from "react";
import { Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { StyledSkeletonContainer } from "theme";

//* this component is demo stage
export const SkeletonCom: React.FC<CommonComponents.SkeletonCom> = memo(
  ({
    style = {},
    animationType = "pulse",
    animationDuration = 1500,
    animationDelay = 0,
    ...props
  }) => {
    let width = props.width || 200;
    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const skeletonAnimation = Animated.loop(
        Animated.timing(animationValue, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: false,
        })
      );

      skeletonAnimation.start();

      return () => {
        skeletonAnimation.stop();
      };
    }, [animationValue, animationDuration]);

    const translateX = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, width],
    });

    const animatedStyle = {
      opacity: animationValue,
      transform: [
        {
          scale: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1],
          }),
        },
      ],
    };

    return (
      <Animated.View style={animatedStyle}>
        <StyledSkeletonContainer {...props}>
          <Animated.View
            style={{
              flex: 1,
              transform: [{ translateX }],
              backgroundColor: "#E8E8E8",
            }}
          >
            <LinearGradient
              colors={["#F5F5F5", "#E8E8E8", "#F5F5F5"]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </Animated.View>
        </StyledSkeletonContainer>
      </Animated.View>
    );
  }
);
