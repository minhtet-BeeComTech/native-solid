import React, { memo, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "styled-components";
import Swiper from "react-native-swiper";

import { TextCom } from "../typo";
import { CardCom } from "../card";
import { ImageCom } from "../image";

export const SwiperCom: React.FC<CommonComponents.SwiperSliderCom> = memo(
  ({
    paginationStyle,
    isLoading,
    data = [],
    dataKey = "image",
    imgProps,
    swiperProps,
    renderItemCom,
    itemStyles,
    itemImgStyles,
    disabled = false,
    onHandleItemPress,
    ...props
  }) => {
    const themeContext = useContext(ThemeContext);
    const [swiperHeight, setSwiperHeight] = useState(
      swiperProps?.height || 100
    );

    const handleSetSwiperHeight = (event?: any) => {
      let value = event.nativeEvent.layout.height;
      if (value > swiperHeight) {
        setSwiperHeight(value);
      }
    };

    const handlePress = (item: any, index: any) => {
      onHandleItemPress(item, index);
    };

    return (
      <Swiper
        removeClippedSubviews={false}
        style={styles.SwiperWrap}
        autoplay
        autoplayTimeout={5}
        loadMinimal={false}
        paginationStyle={paginationStyle || { bottom: 10 }}
        dotStyle={{
          backgroundColor: themeContext?.color?.typo?.text || "#000",
          opacity: 0.5,
          width: 5,
          height: 5,
        }}
        activeDotStyle={{
          backgroundColor: themeContext?.color?.typo?.primary0 || "#000",
          width: 16,
          height: 5,
        }}
        {...swiperProps}
        height={swiperHeight}
      >
        {props?.children ? (
          props?.children
        ) : data?.length > 0 ? (
          data?.map((x: any, i: any) =>
            renderItemCom ? (
              renderItemCom(x, i)
            ) : (
              <CardCom
                disabled={disabled}
                onPress={() => handlePress(x, i)}
                onLayout={handleSetSwiperHeight}
                key={i}
                style={{
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  borderWidth: 0,
                  borderRadius: 0,
                  ...itemStyles,
                }}
              >
                <ImageCom
                  thumbnailSource={
                    x?.[dataKey]
                      ? { uri: x?.[dataKey] }
                      : require("assets/images/banner.png")
                  }
                  source={
                    x?.[dataKey]
                      ? { uri: x?.[dataKey] }
                      : require("assets/images/banner.png")
                  }
                  style={{
                    width: "100%",
                    borderRadius: 0,
                    ...itemImgStyles,
                  }}
                  {...imgProps}
                />
              </CardCom>
            )
          )
        ) : (
          <CardCom
            style={{
              height: swiperProps?.height || 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 0,
            }}
          >
            <TextCom textAlign="center">Need Ui Component</TextCom>
          </CardCom>
        )}
      </Swiper>
    );
  }
);

const styles = StyleSheet.create({
  SwiperWrap: {},
});
