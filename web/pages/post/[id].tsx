import { GetStaticPaths, GetStaticProps } from 'next'
import { Router } from 'next/dist/client/router'
import { ParsedUrlQuery } from 'querystring'
import PostContent from '../../src/components/post/PostContent'
import { API_URL } from '../../src/config/config'
import '../../styles/globals.css'
export interface PostDetailProps {
  id: string;
  thumbnailUrl: string;
  title: string;
  content: string;
}
function PostDetail(props: PostDetailProps) {
  return (
    <div className='w-full'>
      <div
        className='flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style={{
          backgroundImage: `url("${props.thumbnailUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
      </div>
      <PostContent {...props}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
  const {id} = params
  const data = await fetch(`${API_URL}post/${id}`).then(res => res.json())
  return{
    props: {
      ...data.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  // const data = await fetch(`${API_URL}post/getListPost`).then(res => res.json())
  return{
    paths: [],
    fallback: true
  }
}

export default PostDetail
