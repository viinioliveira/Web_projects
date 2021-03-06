import { ExperienceBar } from "../components/ExperienceBar"
import Head from 'next/head'
import { Profile } from "../components/Profile"
import styles from '../Styles/pages/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { LevelUpModal } from "../components/LevelUpModal";


export default function Home(props) {
  return (
    <ChallengesProvider>
      <div className={styles.container}>
        <Head>
          <title>Movie.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}
