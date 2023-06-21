import openModal from 'components/HOC/openModal'
import FormLogin from './FormLogin'
import { modals } from '@mantine/modals'

export default function openLogin() {
  modals.closeAll()
  openModal(FormLogin)
}
