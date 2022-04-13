import React, {useEffect, useRef, useState} from 'react';

const CountDown = ({QuestionNumber, delay}: any) => {
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState(0);


    const getTimeRemaining = (e: string) => {
        // @ts-ignore
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);

        return {
            total, seconds
        };
    }

    const startTimer = (e: any) => {
        let {total, seconds}
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e: Date | undefined) => {

        setTimer(delay);

        if (Ref.current) clearInterval(Ref.current);
        // @ts-ignore
        Ref.current = setInterval(() => {
            startTimer(e);
        }, 1000);
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + delay);
        // deadline.setMinutes(deadline.getMinutes() + 1);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, [QuestionNumber]);

    return (
        <div>
            time remain : {timer} s
        </div>
    );
};

export default CountDown;