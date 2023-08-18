import styled from 'styled-components/native'
import { Text, TouchableOpacity } from 'react-native'

export const Wrapper = styled(TouchableOpacity)`
  background-color: #fff;
  width: 100%;
  padding: 10px 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ButtonText = styled(Text)`
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
`
