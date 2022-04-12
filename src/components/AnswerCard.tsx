import React from 'react';

function Answer(answer: any) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center cursor-pointer"
            onClick={(e) => answer.onClick(answer.answer)}
        >
            <input
                type="radio"
                name="answer"
                value={answer.answer}
                className="ml-5 dark:bg-gray-800"

            />
            <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                {answer.answer}
            </label>
        </div>
    );
}

const AnswerCard = (answers: any) => {


    return (
        <div>
            {answers.answers.map((answer: any) => (

                    <Answer key={answer} answer={answer} onClick={answers.onClick}/>

            ))}
            <button onClick={() => answers.length}></button>
        </div>
    );
};

export default AnswerCard;