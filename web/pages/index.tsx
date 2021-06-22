import Image from 'next/image'
import { createRef, memo, useCallback, useEffect, useState } from 'react'
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Posts from '../src/components/home/Posts'
import { API_URL } from '../src/config/config'
import { useListPostAPI } from '../src/fetcher/postsAPI/getListPost'

export type PostType = {
  id: string;
  title: string;
  content: string;
  thumbnailUrl: string;
}
interface HomeProps {
  listPost: PostType[];
}


const Home = ({listPost}: HomeProps) => {
  const scrollToRef = createRef<any>()
  // const {data, loading} = useListPostAPI()
  return (
    <div className='w-full'>
      <div
        className='flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style={{
          backgroundImage: `url("https://picsum.photos/id/0/5616/3744")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <p className='text-white text-2xl md:text-4xl font-bold p-2'
        >Welcome to Ndeva blog</p>
        <div
          onClick={() => { scrollToRef.current.scrollIntoView() }}
          className='py-2 px-8 box-border border-2 cursor-pointer md:transition duration-500 md:transform md:hover:scale-110 md:hover:bg-white text-white md:hover:text-gray-700'
        >
          <p className='text-lg'>READ MORE</p>
        </div>
      </div>
      <div ref={scrollToRef} />
      <Posts listPost={listPost} />
      <a href = 'https://serene-ocean-09276.herokuapp.com/posts/7'>Here</a>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const data = await fetch(`${API_URL}posts/getListPost`).then(res => res.json())
  return{
    props: {
      listPost: data.data
    }
  }
}
export default memo(Home)
