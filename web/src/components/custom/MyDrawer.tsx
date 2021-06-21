import React, { memo, useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import { Home as HomeIcon, Menu as MenuIcon, Person as PersonIcon } from '@material-ui/icons'
import { Router } from 'next/dist/client/router'

type DrawerProps = {
  router: Router;
  setShowLogin: (input: boolean) => void
}
const MyDrawer = (props: DrawerProps) => {
  const { router, setShowLogin } = props
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <IconButton className={'focus:outline-none'} onClick = {() => setOpen(true)}>
        <MenuIcon
          fontSize='large'
          className={("text-white")}
        />
      </IconButton>
      <Drawer anchor='right' open={open} onClose = {() => setOpen(false)}>
        <div 
          className='md:w-80 w-52 h-full bg-gray-800 text-white' role="presentation"
          onClick = {() => setOpen(false)}
          onKeyDown = {() => setOpen(false)}
        >
          <List >
            <ListItem button onClick={() => {
              router.push('/')
            }}>
              <ListItemIcon>
                <HomeIcon className='text-white' />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick = {() => {
              setShowLogin(true)
            }}>
              <ListItemIcon>
                <PersonIcon className='text-white' />
              </ListItemIcon>
              <ListItemText primary="Log In / Sign In" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default memo(MyDrawer)