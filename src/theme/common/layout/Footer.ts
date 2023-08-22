import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'

export const StyledFooterFix = styled(SafeAreaView)`
  background-color: ${(props?: any) =>
    props.theme.color.footer[props.bgColor] ||
    props.bgColor ||
    props.theme.color.card.white};
  border-color: ${(props?: any) => props.theme.color.card.line4};
  border-width: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  width: 100%;
  position: relative;
`

export const StyledCustomFooter = styled(View)`
  background-color: ${(props?: any) => props.theme.color.card.bgColor};
  border-color: ${(props?: any) => props.theme.color.card.borderColor};
  border-width: 1px;
  flex-direction: row;
  width: 100%;
  shadow-color: #00000029;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 2.22px;
  elevation: 3;
  min-height: 50px;
`
