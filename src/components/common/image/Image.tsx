import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Animated, StyleSheet, View, Image, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";

const win = Dimensions.get("window");
export const ImageCom: React.FC<CommonComponents.ImageCom> = memo(
  ({ thumbnailSource, source, style, isCalHeight = true, ...props }) => {
    const themeContext = useContext(ThemeContext);
    let thumbnailAnimated = new Animated.Value(0);
    let imageAnimated = new Animated.Value(0);
    const [state, setState]: any = useState(null);

    useEffect(() => {
      if (!style?.height && isCalHeight) {
        const calc = (width?: any, height?: any) => {
          let ratio = win.width / width;
          let calc_width = style?.width || width;
          let calc_height = height * ratio;
          setState({
            ...state,
            calc_height,
            calc_width,
          });
        };
        if (source?.uri)
          Image.getSize(source?.uri || source, (width, height) => {
            calc(width, height);
          });
      }
    }, [source, style?.height]);

    const handleThumbnailLoad = useCallback(() => {
      Animated.timing(thumbnailAnimated, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }, []);

    const onImageLoad = useCallback(() => {
      Animated.timing(imageAnimated, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }, []);

    if (isCalHeight) {
      if (!style?.width) style.width = state?.calc_width;
      if (!style?.height) style.height = state?.calc_height;
    }

    return (
      <View
        style={[
          {
            backgroundColor: themeContext?.color?.form?.inputBgColor,
            ...style,
          },
          styles.container,
        ]}
      >
        <Animated.Image
          source={thumbnailSource}
          onLoad={handleThumbnailLoad}
          style={style}
          blurRadius={1}
          {...props}
        />
        <Animated.Image
          source={source}
          onLoad={onImageLoad}
          style={[styles.imageOverlay, style]}
          {...props}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    position: "relative",
  },
});
