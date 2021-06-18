import Image from 'next/image'
import { createRef, useCallback, useEffect, useState } from 'react'
import { ButtonBase, IconButton } from '@material-ui/core'
import { Router } from 'next/dist/client/router'

type PostDetailProps  = {
  router: Router;
  darkMode: boolean;
}
export default function PostDetail(props: PostDetailProps) {
  const {router, darkMode} = props
  return (
    <div className='w-full'>
      <div
        className='flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style={{
          backgroundImage: `url("https://cdn.wallpaspersafari.com/98/6/q9uadS.jpg")`,
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
      {router.query.id}
    </div>
  )
}
