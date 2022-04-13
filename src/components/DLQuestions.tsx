import React, {useState} from 'react';
import BackBtn from '../shared/BackBtn';
import AnswerCard from './AnswerCard';
import CountDown from './CountDown';
import UseFetch from "../Hook/useFetch";

function DLQuestions({ subject , data  }: any) {
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [delay, setDelay] = useState(30);
  // const [testQuestion , setData] = useState([]);


  // console.log(data && data?.filter((item:any) => item.vehicletype === 'truck'))
  // console.log( testQuestion && testQuestion.questions?.filter((item:any) => item.vehicletype === 'truck'))
  // const testQuestion = data?.questions;

  //@ts-ignore

  // @ts-ignore
  const testQuestion = data?.filter((item:any) => item.vehicletype === subject);


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

  // @ts-ignore
  const  question = testQuestion[QuestionNumber];
  const answers = question.answer;
   // @ts-ignore
  console.log(testQuestion)


  return (
    <div>
      <BackBtn />
      <div className="flex justify-end">
        <CountDown QuestionNumber={QuestionNumber} delay={delay} />
      </div>
      {!showResult && question && (
        <>
          <h1>{question.question}</h1>

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
