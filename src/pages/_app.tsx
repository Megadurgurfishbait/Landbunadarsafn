import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ReactQueryDevtools } from 'react-query-devtools'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      {/* <Header /> */}
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 h-full">
        <Component {...pageProps} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  )
}

export default MyApp
