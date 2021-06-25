import React from 'react'
import { useState, memo, useEffect } from 'react'
import { ButtonBase, Container, IconButton, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import MyDrawer from '../custom/MyDrawer'
import { Router } from 'next/dist/client/router'

type HeaderProps = {
  router: Router;
  setShowLogin: (isShow: boolean) => void
}

const Header = (props: HeaderProps) => {
  
  const { router, setShowLogin } = props
  const [transparent, setTransparent] = useState<boolean>(true)
  const [isMobile, setMobile] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setTransparent(false)
      } else {
        setTransparent(true)
      }
    }
    setMobile(window.innerWidth > 720)
    function handleResize() {
      if (window.innerWidth <= 720) {
        setMobile(false)
      } else {
        setMobile(true)
      }
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <div>
      <div
        className={
          (transparent ?
            "bg-transparent"
            :
            "bg-black bg-opacity-50")
          +
          " md:px-12 px-4 flex fixed z-10 flex-row items-center transition duration-500 opacity w-full h-12"
        }
      >
        <Link href = '/home'>
          <div className={("text-white") + " font-bold cursor-pointer"}>
            Ndeva Blog
          </div>
        </Link>
        <div className = 'flex-1' />
        <div className='flex flex-row items-center text-white'>
          {isMobile && (
            <React.Fragment>
              <ButtonBase
                className = 'focus:outline-none'
                onClick = {() => setShowLogin(true)}
              >
                Login
              </ButtonBase>
              <ButtonBase
                style = {{marginLeft: 12}}
                className = 'focus:outline-none'
              >
                Sign Up
              </ButtonBase>
            </React.Fragment>
          )}
          {!isMobile && <React.Fragment>
            <div className={"ml-2"}>
              Menu
            </div>
            <MyDrawer router={router} setShowLogin = {setShowLogin}/>
          </React.Fragment>}
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
