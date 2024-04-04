import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get('/api/quiz');
      setQuestions(response.data);
    }
    fetchQuestions();
  }, []);

  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  function handleAnswerSubmit(event) {
    event.preventDefault();
    if (answer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setAnswer('');
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h1>Final Score: {score}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Question {currentQuestion + 1}</h1>
      <h2>{questions[currentQuestion].question}</h2>
      <form onSubmit={handleAnswerSubmit}>
        <input type="text" value={answer} onChange={handleAnswerChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Current Score: {score}</p>
    </div>
  );
}

export default QuizApp;
