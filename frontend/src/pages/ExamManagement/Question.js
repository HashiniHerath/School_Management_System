import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function Question({ question, setAnswersToArray }) {
  const [questionA, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");
  useEffect(() => {

    if (question) {

      setQuestion(question["question"])
      setAnswerA(question["answera"])
      setAnswerB(question["answerb"])
      setAnswerC(question["answerc"])
      setAnswerD(question["answerd"])
    }
  }, [question])






  return (

    <div class="container mt-5">
      <div class="d-flex justify-content-center row">
        <div class="col-md-10 col-lg-10">
          <div class="border">

            <div class="question bg-white p-3 border-bottom">
              <div class="d-flex flex-row align-items-center question-title">
                <h3 class="text-danger">Q.</h3>
                <h5 class="mt-1 ml-2">{questionA}</h5>
              </div><div class="ans ml-2">
                <label class="radio"> <input type="radio" name="answer" value="brazil"
                  onChange={(e) => {
                    setAnswersToArray({ question, "given_answer": "1" })
                  }} /> <span>{answerA}</span>
                </label>
              </div><div class="ans ml-2">
                <label class="radio"> <input type="radio" name="answer" value="Germany" onChange={(e) => {
                  setAnswersToArray({ question, "given_answer": "2" })
                }} /> <span>{answerB}</span>
                </label>
              </div><div class="ans ml-2">
                <label class="radio"> <input type="radio" name="answer" value="Indonesia" onChange={(e) => {
                  setAnswersToArray({ question, "given_answer": "3" })
                }} /> <span>{answerC}</span>
                </label>
              </div><div class="ans ml-2">
                <label class="radio"> <input type="radio" name="answer" value="Russia" onChange={(e) => {
                  setAnswersToArray({ question, "given_answer": "4" })
                }} /> <span>{answerD}</span>
                </label>
              </div></div>

          </div>
        </div>
      </div>
    </div>


  )

}

export default Question;