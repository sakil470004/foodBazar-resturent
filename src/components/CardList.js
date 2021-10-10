import React from 'react';
import Card from './Card';

const CardList = ({ foods }) => {
  return (
    <div>
      {
        foods.map((user, i) => {
          return (
            <Card
              key={i}
              id={foods[i].idMeal}
              name={foods[i].strMeal}
              image={foods[i].strMealThumb}
             
              />
          );
        })
      }
    </div>
  );
}

export default CardList;