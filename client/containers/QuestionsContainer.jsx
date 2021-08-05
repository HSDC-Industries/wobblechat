import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateQuestionForm from "../components/CreateQuestionForm";
import Chat from "../components/Chat";
import QuestionCard from "../components/QuestionCard";


const QuestionsContainer = ({ newQuestion }) => {

  const[questions, setQuestions] = useState([]);

  useEffect( () => {
    fetch("/api/questions")
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.slice(0, 15));
    })
    .catch((err) =>
      console.log("error in NewMainAppContainer fetch: ", err)
    );
  }, [newQuestion]);


  const questionsArray = questions.map(
    ({ id, title, description }) => {
        return (
          <QuestionCard
            key={id}
            title={title}
            description={description}
            id={id}
          />
        ); 
    }
  );

  return (
    <div className="question-window">
      <h2>Questions</h2>
      {questionsArray}
    </div>
  );
};

export default QuestionsContainer;
