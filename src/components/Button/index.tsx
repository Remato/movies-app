import { ButtonProps } from 'react-native'
import { Wrapper, ButtonText } from './styles'

type Props = {
  onPress(): void
  children: React.ReactNode
} & ButtonProps

function Button({ onPress, children }: Props) {
  return (
    <Wrapper onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Wrapper>
  )
}

export default Button
