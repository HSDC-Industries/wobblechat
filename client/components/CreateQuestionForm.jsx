import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//There will only be one instance of this component on the page
//Requirements: one inherited prop: userId, must interact with DB and consequently update state upon confirmation of 
//  successful post to db

const CreateQuestionForm = ({ setNewQuestion }) => {
  //using useState hook to enable state in component
  //first item = current value, second item = a setter function, to update value, destrctured via [] and initialized to empty string
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  //not working
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/questions/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((response) => {
        console.log(response);
        setNewQuestion(true);
      })
      .catch((err) => {
        console.log("Error making fetch request in createQuestion", err);
      });
  }

  return (
    <div className="ask-search-questions">
      <h2>Ask a Question:</h2>
      <input type="text" placeholder="ask me anything" onChange={e => setTitle(e.target.value )} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CreateQuestionForm;