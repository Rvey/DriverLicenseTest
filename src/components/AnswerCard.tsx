import React, {Fragment, useId, useState} from 'react';


const AnswerCard = (props) => {

    return (
        <div>
            {props.answers.map((answer: any) => (

                <Fragment key={answer}>
                    <div

                        className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center cursor-pointer"
                        onClick={(e) => {
                            props.handleClick(answer)
                        }}
                    >
                        <input
                            type="radio"
                            name="answer"
                            value={answer}
                            className="ml-5 dark:bg-gray-800"

                        />
                        <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                            {answer}
                        </label>
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default AnswerCard;