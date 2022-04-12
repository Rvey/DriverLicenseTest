import React, {useState} from 'react';
import {useNavigate} from "react-router";
import BackBtn from "../shared/BackBtn";
import AnswerCard from "./AnswerCard";
// import questions from "../../questions.json"

const questions =  [
    {
        question: "What is the capital city of Switzerland?",
        answers: [
            "Geneva",
            "Zurich",
            "Bern",
            "Lausanne"
        ],
        correctAnswer: "Bern"
    },
    {
        question: "What is the capital city of Switzerland?",
        answers: [
            "Tokyo",
            "Beijing",
            "Mumbai",
            "New York"
        ],
        correctAnswer: "Beijing"
    },
    {
        question: "What is the most populous city in the world?",
        answers: [
            "The Nile",
            "The Amazon",
            "The Congo",
            "The Yangtze"
        ],
        correctAnswer: "The Amazon"
    },
    {
        question: "How large an area does Asia cover in km³?",
        answers: [
            "44.58 million",
            "52.64 million",
            "41.59 million",
            "48.41 million"
        ],
        correctAnswer: "44.58 million"
    },

]
const TruckLicence = () => {
    const [QuestionNumber , setQuestionNumber] = useState(0)
    const [score , setScore] = useState(0)
    const [showResult , setShowResult] = useState(false)
   function handleClick (answer : any)  {
        const correctAnswer = questions[QuestionNumber].correctAnswer
        if (answer === correctAnswer) {
            console.log("correct")
            setScore(score + 1)
        }

        if (QuestionNumber < questions.length - 1) {
            setQuestionNumber(QuestionNumber + 1)

        }else {
            setShowResult(true)
        }

    }
    // @ts-ignore
    const answers = questions[QuestionNumber].answers;
    const question = questions[QuestionNumber].question

    return (
        <div>
            <BackBtn/>
            <h1>{question}</h1>
            {
                !showResult &&

                 <AnswerCard answers={answers} onClick={handleClick}/>
            }
            {
                showResult ?
                    <h1>Your score is {score}</h1>
                    :
                    <h1>{QuestionNumber + 1}/{questions.length}</h1>
            }
        </div>
    );
};

export default TruckLicence;