import { Button, Modal, Typography } from '../../ui'
import { ReactNode } from 'react'

type DeletePackModalPropsType = {
  title: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  actionButtonText: string
  onClick: () => void
  alertMessage: string
  children?: ReactNode
}

export const DeleteModal = (props: DeletePackModalPropsType) => {
  const { isOpen, setIsOpen, children, alertMessage, title, onClick, actionButtonText } = props

  const onClickHandler = () => {
    onClick()
    setIsOpen(false)
  }

  return (
    <>
      <Modal.Root isOpen={isOpen} trigger={children} title={title} onOpenChange={setIsOpen}>
        <Modal.Body>{alertMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} onClick={onClickHandler}>
            <Typography variant={'subtitle_2'}>{actionButtonText}</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  )
}
