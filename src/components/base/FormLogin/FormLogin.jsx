import React, { useEffect } from 'react'
import { Button, LoadingOverlay, Stack, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { loginSchema } from 'services/yup/schema'
import { useDispatch, useSelector } from 'react-redux'
import USER_API from 'services/api/userAPI'
import { userLogin, userProfile } from 'services/redux/slices/userSlice'
import storage from 'utils/storage'
import { TOKEN } from 'utils/constant'
import userThunk from 'services/redux/thunk/userThunk'

export default function FormLogin() {
  /* App State */
  const visible = useSelector(({ user }) => user.isLoading)
  const userLogin = useSelector(({ user }) => user.userLogin)
  /* Hook Init */
  const dispatch = useDispatch()
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
  /* Logic */
  const submitForm = (data) => {
    const action = userThunk.signin(data)
    dispatch(action)
  }
  useEffect(() => {
    if (storage.get(TOKEN)) {
      const action = userThunk.getProfile()
      dispatch(action)
    }
  }, [userLogin])
  return (
    <>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Text fw={'bold'} fz={24} ta={'center'} mb={20} color="white">
        Sign In
      </Text>
      <form onSubmit={form.onSubmit((data) => submitForm(data))}>
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
