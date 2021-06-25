import React, { memo, useEffect, useState } from 'react'
import { PlayCircleOutlineOutlined } from '@material-ui/icons'
import Link from 'next/link'
import { PostType } from '../../../pages'

interface PostProps extends PostType {
  className?: string;
}
const Post = (props: PostProps) => {
  const { content, thumbnailUrl, title, id, className } = props
  const [hover, setHover] = useState<boolean>(false)
  // const ss = 
  
  return (
    <Link href={'/post/[id]'} as = {'/post/'+id} scroll = {true} prefetch = {false} >
    <div
      className={'md:w-96 w-64 h-100 rounded-lg shadow-md bg-white dark:bg-gray-400 cursor-pointer '+className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='w-full h-1/2 bg-cover bg-center rounded-t-lg'
        style={{
          backgroundImage: `url("${thumbnailUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundClip: 'border-box'
        }}
      >
        {hover && <div className={'relative h-full w-full'}>
          <div className='bg-white opacity-20 w-full h-full rounded-t-lg' />
          <PlayCircleOutlineOutlined fontSize='large' className='absolute text-white opacity-100 top-2 right-2' />
        </div>}
      </div>
      <div className='p-4 h-2/6'>
        <p className={(hover ? 'text-blue-600' : '') + ' md:text-lg font-bold'}>
          {title.slice(0, 45)}{title.length > 40 && '...'}
        </p>
        <p className='md:text-sm text-xs text-gray-600 overflow-ellipsis'>
          {content.slice(0, 120)}...
        </p>
      </div>
      <div className='md:text-sm text-xs text-gray-500 p-4 h-1/6 border-t-2 border-white dark:border-gray-300'>
        <p>Ndeva</p>
        <p>{new Date().toDateString()}</p>
      </div>
    </div>
  </Link>
  )
}

export default memo(Post)