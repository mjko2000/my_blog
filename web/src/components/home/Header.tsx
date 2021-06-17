import React from 'react'
import { useState, memo, useEffect } from 'react'
import { Container, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

type HeaderProps = {

}
const transAnim = "transition duration-500 "
const Header = (props: HeaderProps) => {

  const [transparent, setTransparent] = useState<boolean>(true)

  useEffect(() => {
    function handleScroll(event: Event) {
      if (window.scrollY > 200) {
        setTransparent(false)
      } else {
        setTransparent(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div
      className={
        (transparent ?
          "bg-transparent"
          :
          "bg-black")
        +
        " md:px-12 px-4 flex fixed z-10 flex-row items-center transition duration-500 opacity w-full h-12"
      }
    >
      <div className={(transparent ? "text-white" : "text-white") + " flex-1 font-bold"}>
        Ndeva Blog
      </div>
      <div className = 'flex flex-row items-center'>
        <div className={transparent ? "text-white" : "text-white"}>
          Menu
        </div>
        <IconButton className={'focus:outline-none'}>
          <Menu
            fontSize='large'
            className={(transparent ? 'text-white' : 'text-white')}
          />
        </IconButton>
      </div>
    </div>
  )
}

export default memo(Header)
