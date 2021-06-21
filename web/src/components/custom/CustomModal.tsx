import { Backdrop, IconButton, Modal, TextField, InputAdornment } from '@material-ui/core'
import React, { memo, ReactChildren, ReactElement } from 'react'
import { Close as CloseIcon, Person as PersonIcon } from '@material-ui/icons'

interface Props {
  show: boolean;
  setShow: (isShow: boolean) => void;
  title: string;
  children: ReactElement;
}

function CustomModal(props: Props) {
  const { show, setShow, title, children } = props
  return (
    <Modal
      open={show}
      onClose={() => { setShow(false) }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      className='flex items-center justify-center'
    >
      <div className='bg-white p-2 mx-4 rounded-lg text-center' >
        <div className='w-full text-right'>
          <IconButton
            onClick = {() => setShow(false)}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </div>
        <div className = 'flex flex-col px-10'>
          <p className = 'text-3xl text-gray-700 mb-8'>{title}</p>
          {children}
        </div>
      </div>
    </Modal>
  )
}

export default memo(CustomModal)