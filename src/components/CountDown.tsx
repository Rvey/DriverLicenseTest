import React, { useEffect, useRef, useState } from 'react';

function CountDown({ QuestionNumber, delay }: any) {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState(0);

  const getTimeRemaining = (e: string) => {
    // @ts-ignore
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);

    return {
      total,
      seconds
    };
  };

  const startTimer = (e: any) => {
    const { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // @ts-ignore
      setTimer( seconds > 9 ? seconds : `0${seconds}`);
    }
  };

  const clearTimer = (e: Date | undefined) => {
    setTimer(delay);

    if (Ref.current) clearInterval(Ref.current);
    // @ts-ignore
    Ref.current = setInterval(() => {
      startTimer(e);
    }, 1000);
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + delay);
    // deadline.setMinutes(deadline.getMinutes() + 1);
    return deadline;
  };
  useEffect(() => {
    let abortController = new AbortController();
    clearTimer(getDeadTime())
    return () => {
      abortController.abort();
    };
  }, [QuestionNumber]);

  return (
      <div
          className="flex p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert">
        <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"></path>
        </svg>
        <div>
          <span className="font-medium">Time left! :</span> {timer} s
        </div>
      </div>
  );
}

export default CountDown;
