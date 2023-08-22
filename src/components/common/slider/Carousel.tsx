import React, { memo } from "react";
import { Dimensions } from "react-native";

import Carousel, { CarouselProps } from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
export const CarouselCom: React.FC<CommonComponents.CarouselCom> = memo(
  ({ carouselRef, ...props }) => {
    return (
      <Carousel
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={width * 0.85}
        {...props}
      />
    );
  }
);
