import React, { Component, useState, useEffect } from "react";
import QuestionsContainer from "./QuestionsContainer";
import CreateQuestionForm from "../components/CreateQuestionForm";
import Header from '../components/Header';

const newMainAppContainer = () =>{
  const [newQuestion, setNewQuestion] = useState(false);

  return (
    <div>
      <Header />
      <CreateQuestionForm setNewQuestion={setNewQuestion} />
      <QuestionsContainer newQuestion={newQuestion}/>
    </div>
  )

}




export default newMainAppContainer;