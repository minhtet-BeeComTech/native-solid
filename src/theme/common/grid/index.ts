import styled from 'styled-components'
import { View } from 'react-native'

export const StyledRow = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`
// margin-top: 5px;
// margin-bottom: 16px;
// justify-content: ${props => props.content || 'flex-start'};
// align-items: ${props => props.align || 'flex-start'};

export const StyledCol = styled(View)`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: ${(props?: any) => props.bottom || 0};
`
