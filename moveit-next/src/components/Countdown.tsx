
import { useContext } from 'react';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../Styles/components/Countdown.module.css';



export function Countdown() {

    const { minutes, seconds, hasFinish, isActive, StartCountdown, resetCountdown } = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>


            { hasFinish ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (<button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar o ciclo
                        </button>) : (
                                <button onClick={StartCountdown}
                                    type="button"
                                    className={styles.countdownButton}
                                >
                                    Iniciar Ciclo
                                </button>
                            )}
                    </>
                )}

        </div>
    );
}