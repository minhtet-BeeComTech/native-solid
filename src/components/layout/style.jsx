import { Dimensions } from 'react-native'
import styled from 'styled-components'
import { color } from '../../theme'

const { width, height } = Dimensions.get('window')

const StyledHeaderContainer = styled.View`
  background-color: ${color.header.bgColor};
  border-bottom-color: ${color.header.borderColor};
  border-bottom-width: 1px;
  width: 100%;
  height: ${0.07 * height}px;
  z-index: 999;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

const StyledLoader = styled.View`
  flex: 1; 
  justify-content: center; 
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: rgba(52, 52, 52, .1); */
`

export {
  StyledHeaderContainer,
  StyledLoader
}