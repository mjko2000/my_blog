import { GetStaticPaths, GetStaticProps } from 'next'
import React, { memo } from 'react'
import { PostType, TopicType } from '..'
import PostItem from '../../src/components/home/PostItem'
import { API_URL } from '../../src/config/config'
import '../../styles/globals.css'
interface Props extends TopicType {
  listPost: PostType[]
}

function Topic(props: Props) {
  const {listPost, title, thumbnailUrl} = props
  return (
    <div className = 'w-full'>
      <div
        className='flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style={{
          backgroundImage: `url("${thumbnailUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <p className = 'text-4xl text-gray-200'>{title}</p>
      </div>
      <div className = 'grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center py-10 md:px-16 px-4'>
      {listPost.map(post => <PostItem {...post} key = {post.id} className = 'w-1/3' />)}
      </div>
    </div>
  )
}



export const getStaticProps: GetStaticProps = async ({params}: any) => {
  const {topic} = params
  const data = await fetch(`${API_URL}topic/${topic}`).then(res => res.json())
  return{
    props: {
      ...data.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const data = await fetch(`${API_URL}topic/getListTopic`).then(res => res.json())
  // return {
  //   paths: [],
  //   fallback: false
  // }
  if(!data.data) return {
    paths: [],
    fallback: false
  }
  return{
    paths: data.data ? data.data.map((topic:any) => ({params:{topic: topic.url}})) : [],
    fallback: false
  }
}

export default memo(Topic)
