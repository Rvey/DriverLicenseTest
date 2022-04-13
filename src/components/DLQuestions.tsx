import React, {useState} from 'react';
import BackBtn from '../shared/BackBtn';
import AnswerCard from './AnswerCard';
import CountDown from './CountDown';
import CandidateInfo from "./CandidateInfo";
import {useNavigate} from "react-router";


function DLQuestions({subject, data}: any) {
    const [QuestionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [delay, setDelay] = useState(30);
    const navigate = useNavigate()

    // @ts-ignore
    const testQuestion = data?.filter((item: any) => item.vehicletype === subject);
    const question = testQuestion[QuestionNumber];
    const answers = question.answer;

    const handleClick = (answer: any) => {
        if (answer === question.correctanswer) {
            setScore(score + 1);

        }

        if (QuestionNumber < testQuestion.length - 1) {
            setQuestionNumber(QuestionNumber + 1);
        } else if (score > 30) {
            setShowResult(true);
        } else {
            navigate('/')
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
    return (
        <div className="mx-9 flex flex-col justify-between h-screen">
            <div className="flex justify-between items-center items-center m-4 bg-gray-100 p-4 rounded-md">
                <BackBtn/>
                <CountDown QuestionNumber={QuestionNumber} delay={delay}/>
                {QuestionNumber + 1}/{testQuestion.length}
            </div>
            {!showResult && question && (
                <div>
                    <div
                        className="p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg"
                        role="alert">
                        <span className="font-medium">Question {QuestionNumber + 1}</span>: {question.question}
                    </div>


                    <AnswerCard answers={answers} handleClick={handleClick}/>
                </div>
            )}
            {
                showResult &&
                <CandidateInfo score={score}/>
            }


        </div>
    );
}

export default DLQuestions;
