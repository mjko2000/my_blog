import React, { memo, useEffect, useState } from 'react'
import {PlayCircleOutlineOutlined} from '@material-ui/icons'
import Link from 'next/link'

type PostProps = {
  title: string;
  content: string;
  thumbnailUrl: string;
}
const Post = (props: PostProps) => {
  const {content, thumbnailUrl, title} = props
  const [hover, setHover] = useState<boolean>(false)
  
  return(
    <Link scroll = {true} href = '/posts/22'>
      <div
        className = 'w-full rounded-lg shadow-md bg-white cursor-pointer' 
        style = {{height: '500px'}}
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
      >
      <div className = 'w-full h-1/2 bg-cover bg-center' 
        style = {{
          backgroundImage: `url("${thumbnailUrl}")`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        {hover &&<div className = {'relative h-full w-full'}>
          <div className = 'bg-white opacity-20 w-full h-full' />
          <PlayCircleOutlineOutlined fontSize = 'large' className = 'absolute text-white opacity-100 top-2 right-2' />
        </div>}
      </div>
      <div className = 'p-4 h-2/6'>
        <p className = {(hover ? 'text-blue-600':'') + ' text-lg font-bold'}>
          {title.slice(0,45)}{title.length > 40 && '...'}
        </p>
        <p className = 'text-sm text-gray-600 overflow-ellipsis'>
          {content.slice(0,120)}...
        </p>
      </div>
      <div className = 'text-sm text-gray-400 p-4 h-1/6 border-t-2'>
        <p>Ndeva</p>
        <p>{new Date().toDateString()}</p>
      </div>
    </div>
    </Link>
  )
}

export default memo(Post)