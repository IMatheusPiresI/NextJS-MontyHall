import '../src/assets/styles/globals.scss';
import { DoorContextProvider } from '../src/contexts/DoorContext'
function MyApp({ Component, pageProps }) {
  return (
    <DoorContextProvider>
        <Component {...pageProps} />
    </DoorContextProvider>
    
  )
}

export default MyApp
