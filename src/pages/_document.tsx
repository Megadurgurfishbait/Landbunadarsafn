import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
            rel="dns-prefetch"
          />
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
