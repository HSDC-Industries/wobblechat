import React from 'react';
import { useState, useEffect } from 'react';
import { Link , Render, useLocation } from 'react-router-dom';

const Answer = () =>{
  const [answer, setAnswer] = useState('');
  const location = useLocation();
  const { id, title, description } = location.state;
  const [previousAnswers, setPreviousAnswers] = useState([]);
  const [redirect, toggleRedirect] = useState(true);
  //display the question
  //get other answer and display them

  useEffect(() => {
    fetch(`/api/messages/${id}`)
      .then(response =>
        response.json()
      )
      .then(data => {
        setPreviousAnswers(data.slice(-10));
      })
      .catch(err => {
        console.log(err);
      })
  }, [redirect]);


  const handleClick = (e) => {
    e.preventDefault();
    fetch(`/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id, 
        answer
      }),
    })
      .then((response) => {
        console.log('about to redirect: ', response);
        redirect ? toggleRedirect(false) : toggleRedirect(true);
        document.getElementById('changethis').value='';
      })
      .catch((err) => {
        console.log("Error making fetch request in createQuestion", err);
      });
  }

  return (
    <div className = 'maindiv'>
      <div className="answer-question">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul id = "previousAnswers">{previousAnswers ? previousAnswers.map(x => <li key={x.id}>{x.content}</li>) : null}</ul>
      <input id='changethis' onChange={e => setAnswer(e.target.value)} placeholder="share your answer"></input>
      <button id ='submitAnswer' onClick={handleClick}>Submit</button>
      {/* //{redirect ? <Render {`/question/${id}`} /> : null} */}
      </div>
    </div>
  )
}

export default Answer;