import React, { memo, useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import { Home as HomeIcon, Menu as MenuIcon } from '@material-ui/icons'
import { Router } from 'next/dist/client/router'

type DrawerProps = {
  router: Router;
}
const MyDrawer = (props: DrawerProps) => {
  const { router } = props
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
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default memo(MyDrawer)