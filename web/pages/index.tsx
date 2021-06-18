import Image from 'next/image'
import { createRef, memo, useCallback, useEffect, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Posts from '../src/components/home/Posts'
import Footer from '../src/components/home/Footer'
import { Router } from 'next/dist/client/router'

type PostType = {
  title: string;
  content: string;
  thumbnailUrl: string;
}
interface HomeProps extends InferGetStaticPropsType<typeof getStaticProps> {
  router: Router;
  darkMode: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch("https://serene-ocean-09276.herokuapp.com/api/posts/getListPost").then(res => res.json())
  // console.log('result', result)
  const listPost: [PostType] = result.data ? result.data : []
  return {
    props: {
      listPost
    }
  }
}

function Home({router, darkMode, listPost}: HomeProps) {
  const [value, setValue] = useState<Number|undefined>()
  const scrollToRef = createRef<any>()
  return (
    <div className = 'w-full'>
      <div
        className = 'flex flex-col w-full md:h-screen h-80 bg-cover items-center justify-center'
        style = {{
          backgroundImage: `url("https://cdn.wallpapersafari.com/98/6/q9uadS.jpg")`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <a className = 'text-white text-4xl font-bold p-2'
        >Welcome to Ndeva blog</a>
        <div
          onClick = {() => {scrollToRef.current.scrollIntoView()}} 
          className = 'py-2 px-8 box-border border-2 cursor-pointer md:transition duration-500 md:transform md:hover:scale-110 md:hover:bg-white text-white md:hover:text-gray-700'
        >
          <p className = 'text-lg'>READ MORE</p>
        </div>
      </div>
      <div ref = {scrollToRef} /> 
      <Posts listPost = {listPost} />
      <Footer />
    </div>
  )
}

export default memo(Home)
