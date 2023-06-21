import openModal from 'components/HOC/openModal'
import FormRegister from './FormRegister'
import { modals } from '@mantine/modals'

export default function openRegister() {
  modals.closeAll()
  openModal(FormRegister)
}
