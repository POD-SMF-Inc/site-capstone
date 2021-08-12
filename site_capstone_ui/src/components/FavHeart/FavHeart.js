import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import  HeartLogo  from '../../assets/heart2.png';
import  FullHeartLogo  from '../../assets/fullheart.png';

import './FavHeart.css';

const FavHeart = ({ id, title, image }) => {
    const [fave, setFave] = useState(false);
    const { faves, addFave, deleteFave } = useContext(GlobalContext);
  
    useEffect(() => {
      if (!faves.some((fave) => fave.id === id)) {
        setFave(false);
      } else {
        setFave(true);
      }
    }, [faves, id]);
  
    const addToFaves = () => {
      const newFave = {
        id,
        title,
        image,
        missedIngredients: [],
      };
      if (!faves.some((fave) => fave.id === id)) {
        addFave(newFave);
      } else {
        deleteFave(id);
      }
    };

        return (
            <div
            className="w-10 h-10 hover:opacity-50 focus:outline-none cursor-pointer"
            onClick={addToFaves}
          >
            <img src={fave ? FullHeartLogo : HeartLogo} alt="Heart Icon" />
          </div>
         );
     
}
 
export default FavHeart;

/* <FullHeartLogo 
className='fav-logo' 
onClick={() => removeFromFav()} />
*/