import React, { use } from 'react';
import SelectedCard from './SelectedCard';

const playersPromisRes = async() => {
    const res = await fetch('/playersData.json');
    return res.json();
}

const playersPromise = playersPromisRes();


const SelectedPlayers = () => {
     const playersData = use(playersPromise);
        console.log(playersData);
    return (
       <div className=''>
            {
                playersData.map((player, index) => <SelectedCard key={index} player={player}></SelectedCard> )
            }
        </div>
    );
};

export default SelectedPlayers;