import React, {Fragment} from 'react';

function AnswerCard(props: any) {
    const {handleClick, answers} = props;
    return (
        <div>
            {answers.map((answer: any) => (
                <Fragment key={answer}>

                    <div
                        className="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-800"
                        onClick={() => {
                        handleClick(answer);
                    }}>
                        <input type="radio" name="answer" value={answer} className="ml-5 dark:bg-gray-800 appearance-none"/>
                        <span className="font-medium">{answer}</span>
                    </div>
                </Fragment>
            ))}
        </div>
    );
}

export default AnswerCard;
