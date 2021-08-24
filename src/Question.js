import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [showInfo, setShowInfo]= useState(false)
  return (
    <article className="question">
      <header>
        {props.title}
        <button className='btn' onClick={()=>{setShowInfo(!showInfo)}}>
          {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>

      </header>

      {showInfo && <p>{props.info}</p>}
    </article>
  )
};

export default Question;
