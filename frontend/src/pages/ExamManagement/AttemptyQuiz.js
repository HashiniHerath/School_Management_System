import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Question from './Question';
import ExamResult from './ExamResult';

const AttemptyQuiz = () => {
    const params = useParams();
    const _id = params.id;
    const [questions, setQuestions] = useState([])
    const [examName, setExamName] = useState("")
    const [answers, setAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [questionCounter, setQuestionCounter] = useState(1)


    const setAnswersToArray = (answer) => {
        let a = answers
        let counter = 0
        for (let ans of a) {
            console.log(ans)
            if (answer.question._id === ans.question._id) {
                a.splice(counter, 1)

            }
            counter++
        }
        a.push(answer)
        setAnswers(answers)
    }

    // Adding timer state
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

    useEffect(() => {

        axios.get("http://localhost:8070/question/get-quizes/" + _id).then((value) => {
            setQuestions(value.data.questions);
        }).catch(err => {
            console.log("get questions failed " + err)
        })

        // Adding timer logic
        const timer = setInterval(() => {
            setTimeLeft(time => {
                if (time === 0) {
                    clearInterval(timer);
                    // call a function to submit the quiz
                    submit();
                    return 0;
                } else {
                    return time - 1;
                }
            });
        }, 1000);

        // Cleanup timer on component unmount
        return () => clearInterval(timer);

    }, [])

    const questionForward = () => {
        if (questionCounter < questions.length) {
            setQuestionCounter(questionCounter + 1)
        }
        if (questionCounter === questions.length) {
            submit()
        }
    }

    const questionBackaward = () => {
        if (questionCounter <= 1) {
            setQuestionCounter(1)
        } else {
            setQuestionCounter(questionCounter - 1)
        }
    }

    // Function to format the time in MM:SS format
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }


    const submit = () => {
        setShowResults(true)
    }

    return (
        <>
            {

                showResults ?

                    <ExamResult result={answers} />
                    :


                    <div>
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>MCQ Question {examName}</h4>
                                <span>({questionCounter} of {questions.length})</span>
                                <span>Time Left: {formatTime(timeLeft)}</span>
                            </div>
                        </div>
                        {
                            <Question question={questions[questionCounter - 1]} setAnswersToArray={setAnswersToArray} />
                        }
                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                            {questions.length !== 1 && <button
                                className="btn btn-primary d-flex align-items-center btn-danger"
                                type="button"
                                onClick={questionBackaward}
                            >
                                <i className="fa fa-angle-left mt-1 mr-1"></i>
                                &nbsp;previous</button>}
                            <button
                                className="btn btn-primary border-success align-items-center btn-success"
                                type="button"
                                onClick={questionForward}
                            >{
                                    questionCounter === questions.length ? "Submit" : "Next"
                                }
                                <i className="fa fa-angle-right ml-2"></i>

                            </button>
                        </div>
                    </div>
            }        </>

    )
}

export default AttemptyQuiz
