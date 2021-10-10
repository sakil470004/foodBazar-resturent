import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import './FoodDetails.css';


const FoodDetals = ({ foods }) => {





    const { idMeal } = useParams();
    const [meal, setMeal] = useState([]);


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [idMeal])


    const history = useHistory();

    const handleback = () => {
        history.push('/');
    }


    return (
        <div >

            <button className='fl ma3 pa2 bg-lightest-blue br4 grow'
                onClick={handleback}
            >Go Back</button>
         <div className='w-95 imageWidth-details-div tc br4 pa1 ma2 dib bw2 shadow-3'

            >

                <img className='tc br3' alt='Foods' src={meal.strMealThumb} />
                <div>
                    <h2>{meal.strMeal}</h2>
                    <p className='ma5 pa2'>{meal.strInstructions}</p>

                    <a className='ma3 pa2 bg-lightest-blue br4 '
                        href={meal.strYoutube}
                        target="_blank" rel="noreferrer"
                    >Visite Our youtube page</a>
                </div>
            </div>
        </div>
    );
}

export default FoodDetals;
