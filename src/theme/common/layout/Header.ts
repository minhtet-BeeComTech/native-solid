import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const StyledHeaderContainer = styled(View)`
  background-color: ${(props?: any) =>
    props.theme.color.header[props?.headerBgColor] ||
    props?.headerBgColor ||
    props.theme.color.header.primary0};
  border-bottom-color: ${(props?: any) =>
    props.theme.color.header[props.borderColor] ||
    props.borderColor ||
    props.theme.color.header.primary0};
  border-bottom-width: 0;
  width: 100%;
  height: ${(props?: any) => props.height || 60}px;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`

export const StyledLeftContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const StyledCenterContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StyledRightContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const StyledlanguageSwitchBtn = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  shadow-color: #00000029;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 2.22px;
  elevation: 3;
`
