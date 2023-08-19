import Login from './Login'
import { useNavigation } from '@react-navigation/native'
import { FormValues } from './form'
import { Routes } from '../../utils/enums'

function LoginContainer() {
  const { navigate } = useNavigation()

  const onSubmit = async ({ user, password }: FormValues) => {
    // hardcode login check
    if (user === 'user' && password === '123') {
      navigate(Routes.MOVIES as never)
    }
  }

  return <Login onPressEnter={onSubmit} />
}

export default LoginContainer
