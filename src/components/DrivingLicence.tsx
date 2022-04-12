import React, {useState} from 'react';
import {useNavigate} from "react-router";
import BackBtn from "../shared/BackBtn";
import AnswerCard from "./AnswerCard";
import questions from "../../questions.json"


const DrivingLicence = ({subject}: any) => {
    const [QuestionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    // @ts-ignore
    let testQuestion = questions[subject]

    const handleClick = (answer: any) => {
        const correctAnswer = testQuestion[QuestionNumber].correctAnswer
        if (answer === correctAnswer) {
            setScore(score + 1)
        }

        if (QuestionNumber < testQuestion.length - 1) {
            setQuestionNumber(QuestionNumber + 1)

        } else {
            setShowResult(true)
        }
    }

    setTimeout(() => {
        if (QuestionNumber < testQuestion.length - 1) {
            setQuestionNumber(QuestionNumber + 1)

        } else {
            setShowResult(true)
        }

    }, 4000)

    const answers = testQuestion[QuestionNumber].answers;
    const question = testQuestion[QuestionNumber].question

    console.log(testQuestion.length, QuestionNumber)
    return (
        <div>
            <BackBtn/>
            {
                !showResult &&
                <>
                    <h1>{question}</h1>

                    <AnswerCard answers={answers} onClick={handleClick}/>
                </>
            }
            {
                showResult ?
                    <h1>Your score is {score}</h1>
                    :
                    <h1>{QuestionNumber + 1}/{testQuestion.length}</h1>
            }
        </div>
    );
};

export default DrivingLicence;