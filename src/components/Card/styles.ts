import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const Wrapper = styled.View`
  width: 48%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

export const InnerWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text`
  font-family: 'Nunito';
  margin-left: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-feature-settings: 'clig' off, 'liga' off;
  text-transform: uppercase;
`

export const Text = styled.Text`
  font-family: 'Nunito';
  margin-top: 8px;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const IconWrapper = styled.View`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.neutral};
`

export const IconBase = styled(Icon).attrs((props) => ({
  color: props.theme.colors.primary,
  size: 16,
}))`
  padding: 4px;
`
