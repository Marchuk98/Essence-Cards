import { Modal } from '../../ui'
import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { Close } from '../../../assets/icons'

import s from './image-modal.module.scss'

type ImagePropsType = {
  src: string
  alt: string
  onClick?: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const ImageModal = (props: ImagePropsType) => {
  const { src, onClick, alt, isOpen, setIsOpen } = props

  return (
    <Modal.Root className={s.modal} isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <Dialog.Close asChild>
          <button className={s.closeIcon}>
            <Close />
          </button>
        </Dialog.Close>
        <img src={src} alt={alt} onClick={onClick} className={s.image} />
      </motion.div>
    </Modal.Root>
  )
}