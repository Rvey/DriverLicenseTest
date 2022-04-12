import React from 'react';
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
        question: "What is the world's largest river by volume?",
        answers: [
            "The Nile",
            "The Amazon",
            "The Congo",
            "The Yangtze"
        ],
        correctAnswer: "The Amazon"
    },
    {
        question: "What is the most populous city in the world?",
        answer: [
            "Tokyo",
            "Beijing",
            "Mumbai",
            "New York"
        ],
        correctAnswer: "Tokyo"
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
    {
        question: "Which of these is not one of the 7 wonders of the ancient world?",
        answers: [
            "The Great Pyramid of Giza",
            "The Statue of Zeus at Olympia",
            "The Parthenon",
            "The Colossus of Rhodes"
        ],
        correctAnswer: "The Parthenon"
    }
]
const TruckLicence = () => {
    const navigate = useNavigate()
    const handleClick = (answer : any) => {
        const correctAnswer = questions[0].correctAnswer
        console.log(correctAnswer , answer)
        // @ts-ignore
        answer == correctAnswer ? console.log("correct") : console.log('false')
    }
    // @ts-ignore
    const answers = questions[0].answers;
    const question = questions[0].question
    console.log(questions)
    return (
        <div>
            <BackBtn/>
            <h1>{question}</h1>
            <AnswerCard answers={answers} onClick={handleClick}/>

        </div>
    );
};

export default TruckLicence;