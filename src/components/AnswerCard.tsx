import React from 'react';

function Answer(props: any) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center cursor-pointer"
            onClick={(e) => props.onClick(props.answer)}
        >
            <input
                type="radio"
                name="answer"
                value={props.answer}
                className="ml-5 dark:bg-gray-800"

            />
            <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                {props.answer}
            </label>
        </div>
    );
}

const AnswerCard = (props: any) => {


    return (
        <div>
            {props.answers?.map((answer: any) => (

                <Answer key={answer} answer={answer} onClick={props.onClick}/>

            ))}
        </div>
    );
};

export default AnswerCard;