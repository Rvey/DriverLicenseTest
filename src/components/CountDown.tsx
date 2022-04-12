import React, {useEffect, useRef, useState} from 'react';

const CountDown = ({QuestionNumber}: any) => {
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');


    const getTimeRemaining = (e: string) => {
        // @ts-ignore
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e: any) => {
        let {total, hours, minutes, seconds}
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e: Date | undefined) => {

        setTimer('00:00:20');

        if (Ref.current) clearInterval(Ref.current);
        // @ts-ignore
        Ref.current = setInterval(() => {
            startTimer(e);
        }, 1000);
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 20);
        // deadline.setMinutes(deadline.getMinutes() + 1);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, [QuestionNumber]);

    return (
        <div>
            {timer}
        </div>
    );
};

export default CountDown;