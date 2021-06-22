import Image from 'next/image'
import { createRef, useCallback, useEffect, useState } from 'react'
import { ButtonBase, IconButton } from '@material-ui/core'
import { Router } from 'next/dist/client/router'
import PostContent from '../src/components/post/PostContent'
import { GetStaticProps } from 'next'
import { API_URL } from '../src/config/config'

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

export const getStaticProps: GetStaticProps = async ({params}) => {
  const data = await fetch(API_URL+"posts/getListPost").then(res => res.json())

  return {
    props: {
      listPost: data.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
  const data = await fetch(API_URL+"posts/getListPost").then(res => res.json())

  // Get the paths we want to pre-render based on posts
  const paths = data.data.map((post:any) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default PostDetail
