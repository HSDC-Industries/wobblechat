import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Answer from './Answer';
import { Link } from 'react-router-dom';

//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';


const QuestionCard = (props) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  const { id, title, description, creator, isOpen } = props;
  const[renderInputBox, setRenderInputBox] = useState(false)

  // console.log(props);

// let answerButton = '';

//   if (isActive===true){
//    answerButton = '<Button variant="primary">Answer this question</Button>';
//   }
  const handleSubmit 


  return (


<div key={id} className="question-container">
  <h3>{title}</h3>
  <p>{description}</p>
  <button variant="primary" className="min-button" onClick={e => setRenderInputBox=true}>Answer question</button>
  { renderInputBox ? <Answer setRenderInputBox={setRenderInputBox} /> : null };
</div>
    

  );
};

export default QuestionCard;
