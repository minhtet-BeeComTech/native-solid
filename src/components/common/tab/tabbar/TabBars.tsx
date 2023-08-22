import React, {
  FC,
  ReactNode,
  ReactElement,
  Children,
  useState,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import {
  ViewStyle,
  LayoutChangeEvent,
  Animated,
  LayoutAnimation,
  TextStyle,
} from "react-native";
import {
  StyledTabBarsContainer,
  StyledTabBarsHeaderContainer,
  StyledTabBarsHeaderItem,
  StyledTabBarsHeaderItemText,
  StyledTabBarsContentContainer,
  StyledTabBarsContentItemContainer,
} from "theme";

interface ITabBarsItem {
  title: string;
  children: ReactNode;
  onPress?: () => void;
}

interface ITabBars {
  initialTab: number;
  style?: ViewStyle;
  haederContainerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  contentContainerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  children: ReactElement<ITabBarsItem>[];
}

const TabBarsItem: FC<ITabBarsItem> = () => null;

const TabBars: FC<ITabBars> & { Item: FC<ITabBarsItem> } = ({
  initialTab = 0,
  style,
  haederContainerStyle,
  headerStyle,
  headerTextStyle,
  contentContainerStyle,
  contentStyle,
  children,
}: ITabBars) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTab);
  const contentHeights = useRef<number[]>([]);
  const tabItemAnimations = useRef(
    children.map(() => new Animated.Value(0))
  ).current;

  const tabbars = Children.map(children, (child: ReactElement, index) => {
    if (!isValidElement(child) && child.type !== TabBars.Item) {
      throw new Error(
        "TabBars component should only allow TabBars.Item components as children."
      );
    }
    const tabbar = child as ReactElement<ITabBarsItem>;
    return cloneElement(tabbar, {
      title: tabbar.props.title,
      children: tabbar.props.children,
      onPress: () => setActiveTabIndex(index),
    });
  });

  const handleLayoutItem = (event: LayoutChangeEvent, index: number) => {
    const { height } = event.nativeEvent.layout;
    contentHeights.current[index] = height;
  };

  const animateTabItemChange = () => {
    const animations = tabItemAnimations.map((animation, index) => {
      return Animated.spring(animation, {
        toValue: activeTabIndex === index ? 1 : 0,
        useNativeDriver: true,
      });
    });

    Animated.parallel(animations).start();
  };

  useEffect(() => {
    animateTabItemChange();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  }, [activeTabIndex]);

  return (
    <StyledTabBarsContainer style={[style]}>
      <StyledTabBarsHeaderContainer style={[haederContainerStyle]}>
        {tabbars.map((tab, index) => (
          <StyledTabBarsHeaderItem
            key={index}
            style={[headerStyle]}
            active={index === activeTabIndex}
            onPress={() => setActiveTabIndex(index)}
            activeOpacity={0.65}
          >
            <StyledTabBarsHeaderItemText
              style={[headerTextStyle]}
              active={index === activeTabIndex}
              weight="md"
            >
              {tab.props.title}
            </StyledTabBarsHeaderItemText>
          </StyledTabBarsHeaderItem>
        ))}
      </StyledTabBarsHeaderContainer>

      <StyledTabBarsContentContainer style={[contentContainerStyle]}>
        {tabbars.map((tab, index) => (
          <StyledTabBarsContentItemContainer
            key={index}
            style={[contentStyle]}
            onLayout={(event) => handleLayoutItem(event, index)}
          >
            {index === activeTabIndex && tab.props.children}
          </StyledTabBarsContentItemContainer>
        ))}
      </StyledTabBarsContentContainer>
    </StyledTabBarsContainer>
  );
};

TabBars.Item = TabBarsItem;

export { TabBars };
