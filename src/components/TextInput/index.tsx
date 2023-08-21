import { useState } from 'react'
import {
  Label,
  Text,
  Wrapper,
  LeftIcon,
  ErrorText,
  RightIcon,
  LeftWrapper,
  RightWrapper,
  LabelAndTextWrapper,
} from './styles'
import { TextInputProps } from 'react-native'
import { FieldError } from 'react-hook-form'

type Props = {
  error?: FieldError
  labelName: string
  leftIconName: string
  rightIconName: string
  onFocus?(): void
  onBlur?(): void
} & TextInputProps

function TextInput({
  error,
  labelName,
  leftIconName,
  rightIconName,
  onFocus = () => {},
  onBlur = () => {},
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    onFocus && onFocus()
    setIsFocused(true)
  }

  const handleBlur = () => {
    onBlur && onBlur()
    setIsFocused(false)
  }

  return (
    <>
      <Wrapper isFocused={isFocused}>
        <LeftWrapper>
          <LeftIcon name={leftIconName} />
          <LabelAndTextWrapper>
            {(isFocused || labelName) && (
              <Label isFocused={isFocused}>{labelName}</Label>
            )}
            <Text onFocus={handleFocus} onBlur={handleBlur} {...rest} />
          </LabelAndTextWrapper>
        </LeftWrapper>

        <RightWrapper>
          <RightIcon name={rightIconName} />
        </RightWrapper>
      </Wrapper>
      {!!error && <ErrorText>{error.message}</ErrorText>}
    </>
  )
}

export default TextInput
