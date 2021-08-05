import React from 'react';
import { Link } from 'react-router-dom';



const QuestionCard = (props) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  const { id, title, description } = props;


  return (
    <div key={id} className="question-line">
      <Link to={{
        pathname: `/question/${id}`,
        state: {
          id: id, 
          title: title, 
          description: description
        }
        }}>
        <span>{title}{` ${description}`}</span>
     </Link>
    </div>  
  );
};

export default QuestionCard; 
