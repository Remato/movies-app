import styled from 'styled-components/native'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

type Props = {
  isFocused: boolean
}

export const Wrapper = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 4px 4px 0px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.tertiary};
`

export const LeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const RightWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const LabelAndTextWrapper = styled.View``

export const Label = styled.Text<Props>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.secondary};
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  margin-top: ${Platform.OS === 'ios' ? 0 : 16}px;
`

export const Text = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
`

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
`

export const LeftIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.secondary,
  size: 24,
}))`
  padding: 16px;
`

export const RightIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.secondary,
  size: 24,
}))`
  padding: 16px;
`
