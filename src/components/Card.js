import React from 'react';
import { useHistory } from "react-router-dom";
import './Card.css';


const Card = ({ name, image, id }) => {
  const url = `/food/${id}`;
  let history = useHistory()
  const handleButton = () => {
    history.push(url);
  }
  return (
    <div className=' tc grow bg-lightest-blue br4 pa2 ma3 dib bw2 shadow-5'
      onClick={handleButton}
    >
      <img className='imageWidth br4' alt='foods' src={`${image}`} />
      <div>
        <h2>{name}</h2>
       
      </div>
    </div>
  );
}

export default Card;
