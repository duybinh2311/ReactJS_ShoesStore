import React from 'react'
import { Button, LoadingOverlay, Stack, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { loginSchema } from 'services/yup/schema'
import { useDisclosure } from '@mantine/hooks'

export default function FormLogin() {
  const [visible, { open, close }] = useDisclosure(false)
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
    <>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Text fw={'bold'} fz={24} ta={'center'} mb={20} color="white">
        Sign In
      </Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          <TextInput {...form.getInputProps('email')} label="Email" />
          <TextInput {...form.getInputProps('password')} label="Password" />
          <Button type="submit" mt={10}>
            Sign In
          </Button>
        </Stack>
      </form>
    </>
  )
}
