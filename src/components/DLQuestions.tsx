import React, {useState} from 'react';
import BackBtn from '../shared/BackBtn';
import AnswerCard from './AnswerCard';
import CountDown from './CountDown';
import CandidateInfo from "./CandidateInfo";


function DLQuestions({subject, data}: any) {
    const [QuestionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [delay, setDelay] = useState(30);


    // @ts-ignore
    const testQuestion = data?.filter((item: any) => item.vehicletype === subject);
    // @ts-ignore
    const question = testQuestion[QuestionNumber];
    const answers = question.answer;

    const handleClick = (answer: any) => {
        if (answer === question.correctanswer) {
            setScore(score + 1);
            console.log('correct');
        }

        if (QuestionNumber < testQuestion.length - 1) {
            setQuestionNumber(QuestionNumber + 1);
        } else {
            setShowResult(true);
            console.log(score)
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





    return (
        <div>
            <BackBtn/>
            <div className="flex justify-end">
                <CountDown QuestionNumber={QuestionNumber} delay={delay}/>
            </div>
            {!showResult && question && (
                <>
                    <h1>{question.question}</h1>

                    <AnswerCard answers={answers} handleClick={handleClick}/>
                </>
            )}
            {showResult ? (
               <CandidateInfo score={score}/>
            ) : (
                <h1>
                    {QuestionNumber + 1}/{testQuestion.length}
                </h1>
            )}
        </div>
    );
}

export default DLQuestions;
