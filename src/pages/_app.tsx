import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ReactQueryDevtools } from 'react-query-devtools'
import type { AppProps } from 'next/app'
import React from 'react'
import { Divider } from '@chakra-ui/react'
import { Footer } from '../components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col relative justify-between items-center xl:mx-28 overflow-hidden min-h-screen shadow-xl">
        <Component {...pageProps} />
        <Divider className="2xl:h-20"></Divider>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default MyApp
