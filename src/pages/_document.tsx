import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
})
const theme = extendTheme({ breakpoints })

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="overflow-y-scroll">
          <ChakraProvider>
            <Main />
            <NextScript />
          </ChakraProvider>
        </body>
      </Html>
    )
  }
}

export default MyDocument
