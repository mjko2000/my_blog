import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ButtonBase, IconButton } from '@material-ui/core'
import Posts from '../src/components/Post/Posts'

export default function Home() {
  const [value, setValue] = useState<Number|undefined>()
  return (
    <div>
      <div
        className = 'flex w-full md:h-screen h-80 bg-cover items-center justify-center'
        style = {{
          backgroundImage: `url("https://cdn.wallpapersafari.com/98/6/q9uadS.jpg")`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          className = 'py-2 px-8 box-border border-2 cursor-pointer transition duration-500 transform hover:scale-110 hover:bg-white text-white hover:text-gray-700'
        >
          <a className = 'text-lg'>READ MORE</a>
        </div>
      </div>
      <Posts />
      {/* <div style = {{width: 100, height: 5000}} /> */}
    </div>
  )
}
