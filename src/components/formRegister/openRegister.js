import modalCenter from 'components/hoc/modalCenter'
import FormRegister from './FormRegister'
import { modals } from '@mantine/modals'

export default function openRegister() {
  modals.closeAll()
  modalCenter(FormRegister)
}
