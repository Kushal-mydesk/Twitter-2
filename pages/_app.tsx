import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import ErrorBoundary from '../components/ErrorBoundary'
function MyApp({ Component, pageProps:{session,...pageProps} }: any) {
  return (
    <SessionProvider session={session}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </SessionProvider>
  
  )

}

export default MyApp
