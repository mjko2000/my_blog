import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Themes from '../src/config/themes/index'
import Head from 'next/head'
import Header from '../src/components/home/Header'
import Footer from '../src/components/home/Footer'
import LoginForm from '../src/components/auth/LoginForm';
var cache = {}
const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div className='font-serif bg-gray-100 dark:bg-gray-800 w-full'>
      <Head>
        <title>Ndeva Blog</title>
        <meta name="description" content="Ndeva Blog" />
        <meta property="og:image" content="https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header router={router} setShowLogin={setShowLogin} />
      <LoginForm
        show={showLogin}
        setShow={setShowLogin}
      />
      <Component {...pageProps} router={router} />
      <Footer />
    </div>
  )
}
export default MyApp
