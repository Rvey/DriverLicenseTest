import React, { useState } from 'react';
import BackBtn from '../shared/BackBtn';
import AnswerCard from './AnswerCard';
import questions from '../../questions.json';
import CountDown from './CountDown';

function DLQuestions({ subject }: any) {
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [delay, setDelay] = useState(30);
  // @ts-ignore
  const testQuestion = questions[subject];

  const handleClick = (answer: any) => {
    const { correctAnswer } = testQuestion[QuestionNumber];
    if (answer === correctAnswer) {
      setScore(score + 1);
      console.log('correct');
    }

    if (QuestionNumber < testQuestion.length - 1) {
      setQuestionNumber(QuestionNumber + 1);
    } else {
      setShowResult(true);
    }
  };

  // @ts-ignore
  setTimeout(() => {
    if (QuestionNumber < testQuestion.length - 1) {
      setQuestionNumber(QuestionNumber + 1);
    } else {
      setShowResult(true);
    }
  }, 30000);

  const { answers } = testQuestion[QuestionNumber];
  const { question } = testQuestion[QuestionNumber];

  return (
    <div>
      <BackBtn />
      <div className="flex justify-end">
        <CountDown QuestionNumber={QuestionNumber} delay={delay} />
      </div>
      {!showResult && (
        <>
          <h1>{question}</h1>

          <AnswerCard answers={answers} handleClick={handleClick} />
        </>
      )}
      {showResult ? (
        <h1>Your score is {score}</h1>
      ) : (
        <h1>
          {QuestionNumber + 1}/{testQuestion.length}
        </h1>
      )}
    </div>
  );
}

export default DLQuestions;
