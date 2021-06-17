import React, { memo, useEffect, useState } from 'react'
import {PlayCircleOutlineOutlined} from '@material-ui/icons'

type PostProps = {

}
const title = 'Digital Marketing in America’s Oldest State, Digital Marketing in America’s Oldest State'
const content = "If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've found new copyable fonts that aren't in this generator, please share them below as well. Thanks!"
const Post = (props: PostProps) => {

  const [hover, setHover] = useState<boolean>(false)
  
  return(
    <a
      href = 'htts://google.com.vn'
      className = 'w-full rounded-lg shadow-md' 
      style = {{height: '500px'}}
      onMouseEnter = {() => setHover(true)}
      onMouseLeave = {() => setHover(false)}
    >
      <div className = 'w-full h-1/2 bg-cover bg-center' 
        style = {{
          backgroundImage: `url("https://switchboardta.org/wp-content/uploads/2020/09/Blog-post-2-image.jpg")`,
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
    </a>
  )
}

export default memo(Post)