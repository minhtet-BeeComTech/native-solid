import styled from 'styled-components'
import Icon from 'react-native-dynamic-vector-icons'

type StyledIconProps = {
  iconSize?: any
  color?: any
}
export const StyledIcon = styled(Icon)<StyledIconProps>`
  font-size: ${(props) =>
    props.theme.fontSize[props?.iconSize] ||
    props.iconSize ||
    props.theme.fontSize.md}px;
  color: ${(props) =>
    props.theme.color.icon[props?.color] ||
    props?.color ||
    props.theme.color.icon.gray500};
`
