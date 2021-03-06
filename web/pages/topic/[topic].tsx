import { GetStaticPaths, GetStaticProps } from 'next'
import React, { memo } from 'react'
import { PostType, TopicType } from '..'
import PostItem from '../../src/components/home/PostItem'
import { API_URL } from '../../src/config/config'
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
      {listPost.map(post => <PostItem {...post} key = {post.id} className = 'md:w-96 w-80' />)}
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

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
  const data = await fetch(`${API_URL}topic/getListTopic`).then(res => res.json())
  // return {
  //   paths: [],
  //   fallback: false
  // }
  if(!data.data) return {
    paths: [],
    fallback: false
  }
  const paths = []
  for(const topic of data.data){
    const path = []
    if(locales) for(const locale of locales){
      path.push({
        params: {topic: topic.url},
        locale: locale
      })
    }
    paths.push(...path)
  }
  return{
    paths,
    fallback: false,
  }
}

export default memo(Topic)
