import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-horizontal: 16px;
`

export const Image = styled.Image`
  margin-top: 94px;
  margin-bottom: 68px;
`

export const InputWrapper = styled.View`
  margin-bottom: 48px;
`

export const ForgotPasswordWrapper = styled.TouchableOpacity`
  padding: 10px 12px;
  margin-top: 24px;
`

export const ForgotPasswordText = styled.Text`
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.secondary};
`
