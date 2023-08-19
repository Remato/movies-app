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
import { useEffect } from 'react'
import { FormValues, validationSchema } from './form'

type Props = {
  onPressEnter(values: FormValues): void
}

function Login({ onPressEnter }: Props) {
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
    <Wrapper>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image source={logo} />
      <InputWrapper>
        <TextInput
          labelName="Usuário"
          leftIconName="user"
          placeholder="Usuário"
          rightIconName="x-circle"
          autoCapitalize="none"
          error={errors.user}
          onChangeText={(user) => setValue('user', user)}
        />
      </InputWrapper>
      <InputWrapper>
        <TextInput
          secureTextEntry
          labelName="Senha"
          leftIconName="lock"
          placeholder="Senha"
          rightIconName="x-circle"
          error={errors.password}
          onChangeText={(password) => setValue('password', password)}
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
