import Image from 'next/image'
import { createRef, useCallback, useEffect, useState } from 'react'
import { ButtonBase, IconButton } from '@material-ui/core'
import { Router } from 'next/dist/client/router'
import PostContent from '../../src/components/post/PostContent'

type PostDetailProps  = {
  router: Router;
  darkMode: boolean;
}
function PostDetail(props: PostDetailProps) {
  const {router, darkMode} = props
  const {id} = router.query
  return (
    <div className='w-full'>
      <div
        className='flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style={{
          backgroundImage: `url("https://picsum.photos/id/${id}/3000/1600")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
      </div>
      <PostContent id = {id}/>
    </div>
  )
}

export default PostDetail
