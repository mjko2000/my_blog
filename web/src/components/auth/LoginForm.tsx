import { TextField, InputAdornment, ButtonBase, IconButton } from '@material-ui/core'
import React, { FormEvent, memo, ReactElement } from 'react'
import CustomModal from '../custom/CustomModal'
import { Person as PersonIcon, Lock as LockIcon, Facebook as FacebookIcon, LinkedIn as LinkedInIcon } from '@material-ui/icons'

interface Props {
  show: boolean;
  setShow: (isShow: boolean) => void;
}

function LoginForm(props: Props) {
  const { show, setShow } = props
  const onSubmit = (e: FormEvent) => {
    setShow(false)
    e.preventDefault()
  }
  return (
    <CustomModal
      show={show}
      setShow={setShow}
      title="Login"
    >
      <div>
        <form
          className='md:w-96 pb-4'
          onSubmit={onSubmit}
        >
          <TextField
            placeholder='Username'
            fullWidth
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon className='text-gray-800' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder='Password'
            type='password'
            fullWidth
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon className='text-gray-800' />
                </InputAdornment>
              ),
            }}
          />
          <button
            type='submit'
            className='w-1/2 py-2 text-white bg-green-500 rounded'
          >
            Login
          </button>
        </form>
        <p className='text-gray-400 text-sm mb-2'>Login as</p>
        <div className='flex flex-row justify-center'>
          <RoundedButton
            onClick = {() => {}}
          >
            <FacebookIcon className = 'text-white' />
          </RoundedButton>
          <RoundedButton
            onClick = {() => {}}
            className = 'ml-2'
          >
          <LinkedInIcon className = 'text-white' />
          </RoundedButton>
        </div>
      </div>
    </CustomModal>
  )
}
type RoundedBtnProps = {
  children: ReactElement;
  onClick: () => void;
  className?: string;
}
const RoundedButton = (props: RoundedBtnProps) => {
  const {children, onClick, className} = props
  return(
    <div
      className = {'p-2 bg-gray-600 rounded-full cursor-pointer '+className}
    >
      {children}
    </div>
  )
}
export default memo(LoginForm)
