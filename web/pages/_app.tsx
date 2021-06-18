import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import Themes from '../src/config/themes/index'
import Head from 'next/head'
import Header from '../src/components/home/Header'
function MyApp({ Component, pageProps, router }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  //Handle darkMode
  useEffect(() => {
    setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const handleMode = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleMode)
    return window.matchMedia('(prefers-color-scheme: dark)').removeEventListener("change", handleMode)
  }, [])
  return (
    <div className='font-serif bg-gray-100 w-full'>
      <ThemeProvider theme={{
        ...useTheme(),
        ...Themes.darkTheme
      }}>
        <Head>
          <title>Ndeva Blog</title>
          <meta name="description" content="Ndeva Blog" />
          <meta property="og:image" content="https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header router = {router} />
        <Component {...pageProps} darkMode={darkMode} router = {router} />

      </ThemeProvider>

    </div>
  )
}
export default MyApp
