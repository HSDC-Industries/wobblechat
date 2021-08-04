import React from 'react';

const Answer = ({ setRenderInputBox }) =>{
  const [answer, setAnswer] = useState('');
     
  const handleClick = () => {
    setRenderInputBox = false;
    fetch('/api/questions/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Error making fetch request in createQuestion", err);
      });

  }

  return (
    <div className="answer-question">
      <input onChange={e => setAnswer(e.target.value)} placeholder="answer"></input>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Answer;