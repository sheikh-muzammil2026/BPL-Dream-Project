import React, { use } from 'react';
import Card from './card';

const playersPromisRes = async() => {
    const res = await fetch('/playersData.json');
    return res.json();
}

const playersPromise = playersPromisRes();


const PlayersCard = () => {
    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5'>
            {
                playersData.map((player, index) => <Card key={index} player={player}></Card>  )
            }
        </div>
    );
};

export default PlayersCard;

// 🎯 json data usage guidline
// 👉 fetch দিয়ে আনতে চাইলে → public folder
// 👉 import করে use করতে চাইলে → src/assets

/**
 * json data fetch kore niye asa 
 * map kore prottek player er data card component e send kora.
 * card compo theke card baniye niye asa . 
 * */ 