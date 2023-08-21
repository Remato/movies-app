import { useForm } from 'react-hook-form'
import {
  Wrapper,
  Image,
  InputWrapper,
  ForgotPasswordText,
  ForgotPasswordWrapper,
} from './styles'
import { TextInput, Button } from '../../components'
import { yupResolver } from '@hookform/resolvers/yup'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { FormValues, validationSchema } from './form'
import { Keyboard } from 'react-native'

type Props = {
  onPressEnter(values: FormValues): void
}

function Login({ onPressEnter }: Props) {
  const [showImage, setShowImage] = useState(true)

  const handleShowImage = () => {
    Keyboard.dismiss()
    setShowImage(true)
  }

  const handleHideImage = () => setShowImage(false)

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })

  useEffect(() => {
    register('user')
    register('password')
  }, [register])

  return (
    <Wrapper onPress={handleShowImage}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {showImage && <Image source={logo} />}
      <InputWrapper>
        <TextInput
          labelName="Usuário"
          leftIconName="user"
          placeholder="user"
          rightIconName="x-circle"
          autoCapitalize="none"
          error={errors.user}
          onChangeText={(user) => setValue('user', user)}
          onFocus={handleHideImage}
        />
      </InputWrapper>
      <InputWrapper>
        <TextInput
          secureTextEntry
          labelName="Senha"
          leftIconName="lock"
          placeholder="pass"
          rightIconName="x-circle"
          error={errors.password}
          onChangeText={(password) => setValue('password', password)}
          onFocus={handleHideImage}
        />
      </InputWrapper>
      <Button title="Entrar" onPress={handleSubmit(onPressEnter)}>
        Entrar
      </Button>
      <ForgotPasswordWrapper>
        <ForgotPasswordText>Esqueci a Senha</ForgotPasswordText>
      </ForgotPasswordWrapper>
    </Wrapper>
  )
}

export default Login
