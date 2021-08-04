import React from 'react';
import { useState } from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Answer from './Answer';
import { Link } from 'react-router-dom';

//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';


const QuestionCard = (props) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  const { id, title, description, creator, isOpen } = props;
  // const [state, setState] = useState({
  //   id: id, 
  //   title: title, 
  //   description: description
  // });


  return (
    <div key={id} className="question-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={{
        pathname: `/question/${id}`,
        state: {
          id: id, 
          title: title, 
          description: description
        }
     }}><button variant="primary" className="min-button">Answer question</button></Link>
    </div>  
  );
};

export default QuestionCard; 
