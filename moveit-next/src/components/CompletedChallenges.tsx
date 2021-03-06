import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/CompletedChallenges.module.css';


export function CompletedChallenges() {
    const { challengesCompleted } = useContext(challengesContext);

    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}