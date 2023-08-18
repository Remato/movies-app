import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  user: yup.string().required('O usuário não pode ser vazio'),
  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(3, 'A senha deve conter pelo menos 6 dígitos'),
})

export type FormValues = {
  user: string
  password: string
}

export const initialValues = {
  user: '',
  password: '',
}
