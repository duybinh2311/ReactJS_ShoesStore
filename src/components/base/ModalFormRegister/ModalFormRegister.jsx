import React from 'react'
import {
  Button,
  Group,
  PasswordInput,
  Radio,
  Stack,
  TextInput,
} from '@mantine/core'
import ModalCenter from 'components/HOC/ModalCenter'
import { useForm, yupResolver } from '@mantine/form'
import { registerSchema } from 'services/yup/schema'

function FormRegister() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      name: '',
      phone: undefined,
      gender: undefined,
    },
    validate: yupResolver(registerSchema),
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
        <TextInput
          {...form.getInputProps('email')}
          label="Email"
          withAsterisk
        />
        <PasswordInput
          {...form.getInputProps('password')}
          label="Password"
          withAsterisk
        />
        <TextInput {...form.getInputProps('name')} label="Name" withAsterisk />
        <TextInput
          {...form.getInputProps('phone')}
          label="Phone"
          withAsterisk
        />
        <Radio.Group
          {...form.getInputProps('gender')}
          mb={10}
          label="Select your gender"
          withAsterisk
        >
          <Group my={5}>
            <Radio value={'true'} label="Male" />
            <Radio value={'false'} label="Female" />
          </Group>
        </Radio.Group>
        <Button type="submit">Register</Button>
      </Stack>
    </form>
  )
}

const ModalFormRegister = ModalCenter(FormRegister)

export default ModalFormRegister
