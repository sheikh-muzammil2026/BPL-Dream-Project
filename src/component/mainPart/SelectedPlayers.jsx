import React, { use } from 'react';
import SelectedCard from './SelectedCard';


const SelectedPlayers = ({selectedPlayers}) => {
   
        console.log(selectedPlayers);
    return (
       <div className=''>
            {
               selectedPlayers.map((player, index) => <SelectedCard  key={index} player={player}></SelectedCard> ) 
            }
        </div>
    );
};

export default SelectedPlayers;