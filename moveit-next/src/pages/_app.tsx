import '../Styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import { Countdown } from '../components/Countdown'

function MyApp({ Component, pageProps }) {

  return (


    <Component {...pageProps} />


  )
}

export default MyApp
