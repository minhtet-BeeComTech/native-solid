// .star {
//   color: gray;
//   cursor: pointer;
//   font-size: 21px;
//   margin-right: 25px;
//   user-select: none;

//   &:focus {
//     outline: none;
//   }
// }

import { Dimensions } from 'react-native'
import styled from 'styled-components'
import { color } from '../../../../src/theme'

const { width, height } = Dimensions.get('window')

const StyledStar = styled.Text`
  color: gray;
  font-size: 21px;
  margin-right: 25px;
`

export {
  StyledStar
}