import styled from 'styled-components/native'
import { Text } from 'react-native'

type Props = {
  filtered?: boolean
}

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
`

export const LeftButtonWrapper = styled.TouchableOpacity<Props>`
  width: 50%;
  border-bottom-width: ${({ filtered }) => (filtered ? 1 : 2)}px;
  border-color: ${({ theme, filtered }) =>
    filtered ? theme.colors.disabled : theme.colors.primary};
`

export const LeftButtonText = styled(Text)<Props>`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  color: ${({ theme, filtered }) =>
    filtered ? theme.colors.disabled : theme.colors.primary};
  padding: 10px;
`

export const RightButtonWrapper = styled.TouchableOpacity<Props>`
  width: 50%;
  border-bottom-width: ${({ filtered }) => (filtered ? 2 : 1)}px;
  border-color: ${({ theme, filtered }) =>
    filtered ? theme.colors.primary : theme.colors.disabled};
`

export const RightButtonText = styled(Text)<Props>`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  color: ${({ theme, filtered }) =>
    filtered ? theme.colors.primary : theme.colors.disabled};
  padding: 10px;
`
