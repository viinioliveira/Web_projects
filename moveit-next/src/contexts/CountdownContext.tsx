import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Countdown } from '../components/Countdown';
import { challengesContext } from './ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinish: boolean;
    isActive: boolean;
    StartCountdown: () => void;
    resetCountdown: () => void;

}


interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(challengesContext);
    const [time, setTime] = useState(25 * 60)
    const [hasFinish, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [isActive, setIsActive] = useState(false);

    function StartCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        setTime(25 * 60);
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);

            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])



    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            isActive,
            StartCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}