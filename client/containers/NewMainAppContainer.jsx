import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuestionsContainer from "./QuestionsContainer";
import CreateQuestionForm from "../components/CreateQuestionForm";
import Chat from "../components/Chat";

const newMainAppContainer = () =>{

  const[fetchData, setFetchData] = useState(false);
  const[questions, setQuestions] = useQuestions([]);

  useEffect(() => {
    fetch("/api/questions")
    .then((res) => res.json())
    .then((questionData) => {
      if (!Array.isArray(questionData)) questionData = [];
      setFetchData(true);
      setQuestions(questionData);
    })
    .catch((err) =>
      console.log("error in NewMainAppContainer fetch: ", err)
    );
  })

}




export default NewMainAppContainer;