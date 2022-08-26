import React from 'react';

const Answer = ({question, answer, imageSrc}) => {
    return (
        <div>
          <p>Q: {question}</p>
           <p>A: {answer} </p>
           <img src={imageSrc} alt=""></img>
         </div>
    );
};

export default Answer;