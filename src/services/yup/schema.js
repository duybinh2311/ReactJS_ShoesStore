import * as Yup from 'yup'
import errMess from './errorMessage'
import { regexPassword } from './regex'

const capitalizeStr = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

Yup.setLocale({
  mixed: {
    required: ({ path }) => `${capitalizeStr(path)} is required`,
    notType: ({ path, type }) => `${capitalizeStr(path)} must be ${type}`,
  },
  string: {
    email: ({ path }) => `${capitalizeStr(path)} is invalid`,
    max: ({ path, max }) => `${capitalizeStr(path)} max ${max} character`,
  },
  number: {
    min: ({ path, min }) => `${capitalizeStr(path)} min ${min} character`,
    max: ({ path, max }) => `${capitalizeStr(path)} max ${max} character`,
  },
})

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(regexPassword, errMess.password)
    .required()
    .max(20),
  name: Yup.string().required(),
  phone: Yup.number().required(),
  gender: Yup.boolean().required(),
})

const loginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
})

export { registerSchema, loginSchema }
