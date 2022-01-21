import '../styles/globals.css'
import Navbar from '@components/Navbar'

import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@store/store'


export default function MyApp({ Component, pageProps } : AppProps) {

  return (
    <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>
  ) 
}
