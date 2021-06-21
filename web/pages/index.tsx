import Image from 'next/image'
import { createRef, memo, useCallback, useEffect, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Posts from '../src/components/home/Posts'
import { Router } from 'next/dist/client/router'
import { useListPostAPI } from '../src/fetcher/postsAPI/getListPost'

export type PostType = {
  id: string;
  title: string;
  content: string;
  thumbnailUrl: string;
}
interface HomeProps {
  router: Router;
  darkMode: boolean;
}


function Home({ router, darkMode }: HomeProps) {
  const scrollToRef = createRef<any>()
  const {data, loading} = useListPostAPI()
  useEffect(() => {

  },[data])
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
        <a className='text-white text-4xl font-bold p-2'
        >Welcome to Ndeva blog</a>
        <div
          onClick={() => { scrollToRef.current.scrollIntoView() }}
          className='py-2 px-8 box-border border-2 cursor-pointer md:transition duration-500 md:transform md:hover:scale-110 md:hover:bg-white text-white md:hover:text-gray-700'
        >
          <p className='text-lg'>READ MORE</p>
        </div>
      </div>
      <div ref={scrollToRef} />
      <Posts listPost={data} />
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   // const result = await fetch("https://serene-ocean-09276.herokuapp.com/api/posts/getListPost").then(res => res.json())
//   // console.log('result', result)
//   console.log("fetch")
//   const data = []
//   for(let i = 0; i < 11; i++) {
//     data.push({
//       id: i.toString(),
//       title: await fetch("http://metaphorpsum.com/sentences/1").then(reponse => reponse.text()),
//       content: await fetch("http://metaphorpsum.com/paragraphs/4").then(reponse => reponse.text()),
//       thumbnailUrl: `https://picsum.photos/id/${i}/1000/600`
//     })
//   }
//   const listPost: PostType[] = data
//   return {
//     props: {
//       listPost
//     },
//     revalidate: 10
//   }
// }

export default memo(Home)
