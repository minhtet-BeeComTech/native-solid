import styled from 'styled-components'
import { View } from 'react-native'

type StyledToastProps = {}
export const StyledToast = styled(View)<StyledToastProps>`
  background-color: ${(props?: any) =>
    props.theme.color.toast[props?.bgColor] ||
    props.bgColor ||
    props.theme.color.toast.bgColor};
  width: ${(props?: any) => props.theme.toastVariable.width || '60px'};
  min-height: ${(props?: any) => props.theme.toastVariable.minHeight}px;
  border-radius: ${(props?: any) =>
    props.theme.cardVariable.borderRadius || 5}px;
  padding: 10px;
`
