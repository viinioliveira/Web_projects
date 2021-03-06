import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext'
import styles from '../Styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(challengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/viinioliveira.png" alt="Vinicius Oliveira" />
            <div>
                <strong>Vinicius Oliveira</strong>
                <p>
                    <img src="icons/level.svg"></img>
                    Level {level}</p>
            </div>
        </div>
    )
}