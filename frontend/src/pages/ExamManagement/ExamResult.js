import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExamResult = ({ result }) => {

   const totalCorrectAnswers = ()=>{
    let counter = 0
    for(let r of result){
        if(r.given_answer === r.question.correctedAnswerIndex){
            counter++
        }
    }
    return counter
   }




    return (
        <div className="container">
            <h1>Exam Result</h1>
            <h3>Total Correct Answers = {totalCorrectAnswers()}</h3>
            {result.map((item, index) => (
                <div key={index} className="card my-3">
                    <div className="card-header">Question {index + 1}</div>
                    <div className="card-body">
                        <h5 className="card-title">{item.question.question}</h5>
                        <p className="card-text">Given Answer: {item.given_answer}</p>
                        <p className="card-text">Correct Answer: {item.question.correctedAnswerIndex}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExamResult;
