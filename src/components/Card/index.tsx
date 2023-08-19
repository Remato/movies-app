import {
  Text,
  Label,
  Wrapper,
  IconBase,
  IconWrapper,
  InnerWrapper,
} from './styles'

type Props = {
  label?: string
  iconName: string
  text?: string | number
}

function Card({ iconName, label, text }: Props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <IconWrapper>
          <IconBase name={iconName} />
        </IconWrapper>
        <Label>{label}</Label>
      </InnerWrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default Card
