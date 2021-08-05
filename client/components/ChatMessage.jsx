import React from 'react';

const Message = ({ time, creator, content }) => {

  return (
    <div>
      <div>{`${time} ${creator}`}</div>
      <span>{content}</span>
    </div>
  )

};

export default Message;