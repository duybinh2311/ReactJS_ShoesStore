import React from 'react'
import { Button, Stack, TextInput } from '@mantine/core'
import ModalCenter from 'components/HOC/ModalCenter'
import { useForm, yupResolver } from '@mantine/form'
import { loginSchema } from 'services/yup/schema'

function FormLogin() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: yupResolver(loginSchema),
    transformValues: (values) => {
      const valuesTransForm = {}
      for (const key in values) {
        valuesTransForm[key] = values[key].trim()
      }
      return valuesTransForm
    },
  })
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <TextInput {...form.getInputProps('email')} label="Email" />
        <TextInput {...form.getInputProps('password')} label="Password" />
        <Button type="submit" mt={10}>
          Register
        </Button>
      </Stack>
    </form>
  )
}

const ModalFormLogin = ModalCenter(FormLogin)

export default ModalFormLogin
