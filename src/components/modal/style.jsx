import { Dimensions } from 'react-native'
import styled from 'styled-components'
import { color } from '../../theme'

const { width, height } = Dimensions.get('window')

const StyledModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StyledModalContact = styled.View`
  background:${color.modal.white};
  width: 80%;
  border: 1px solid ${color.modal.borderColor};
  border-radius: 5px;
  box-shadow: 0 2px 8px ${color.modal.boxShadow};
  padding: 10px;
`

export {
  StyledModalContainer,
  StyledModalContact
}