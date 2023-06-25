import modalCenter from 'components/hoc/modalCenter'
import FormLogin from './FormLogin'
import { modals } from '@mantine/modals'

export default function openLogin() {
  modals.closeAll()
  modalCenter(FormLogin)
}
