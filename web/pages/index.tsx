import Image from 'next/image'
import { createRef, useCallback, useEffect, useState } from 'react'
import { ButtonBase, IconButton } from '@material-ui/core'
import Posts from '../src/components/home/Posts'
import Footer from '../src/components/home/Footer'

export default function Home() {
  const [value, setValue] = useState<Number|undefined>()
  const scrollToRef = createRef<any>()
  return (
    <div>
      <div
        className = 'flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style = {{
          backgroundImage: `url("https://cdn.wallpapersafari.com/98/6/q9uadS.jpg")`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <a className = 'text-white text-4xl font-bold p-2'
        >Welcome to Ndeva blog</a>
        <div
          className = 'py-2 px-8 box-border border-2 cursor-pointer transition duration-500 transform hover:scale-110 hover:bg-white text-white hover:text-gray-700'
        >
          <a onClick = {() => {scrollToRef.current.scrollIntoView()}} className = 'text-lg'>READ MORE</a>
        </div>
      </div>
      <div ref = {scrollToRef} /> 
      <Posts />
      <Footer />
    </div>
  )
}
