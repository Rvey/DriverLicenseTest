import React, { Fragment } from 'react';

function AnswerCard(props: any) {
  const { handleClick, answers } = props;
  return (
    <div>
      {answers.map((answer: any) => (
        <Fragment key={answer}>
          <div
            className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center cursor-pointer"
            onClick={() => {
              handleClick(answer);
            }}
          >
            <input type="radio" name="answer" value={answer} className="ml-5 dark:bg-gray-800" />
            <label className={`text-gray-400 text-lg ml-4`} >{answer}</label>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default AnswerCard;
