import React, { useState } from "react";
import QuestionsContainer from "./QuestionsContainer";
import CreateQuestionForm from "../components/CreateQuestionForm";
import Header from '../components/Header';
import Search from '../components/search';

const newMainAppContainer = () =>{
  const [newQuestion, setNewQuestion] = useState(false);

  return (
    <div className="main-container">
      <Header />
      <CreateQuestionForm setNewQuestion={setNewQuestion} />
      <Search />
      <QuestionsContainer newQuestion={newQuestion} />
    </div>
  )

}

export default newMainAppContainer;