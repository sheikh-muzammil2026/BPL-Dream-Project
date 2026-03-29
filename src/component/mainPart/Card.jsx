import { Flag, User } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({player, coin, setCoin}) => {
    const {image, name, country, role, rating, battingStyle, bowlingStyle, price} = player;
    const [selected, setSelected] = useState(false);
    

    return (
        <div className='shadow-md p-4 flex flex-col gap-4'>
            <img className='w-full h-[150px]' src={image} alt="" />
            <p className='flex gap-1 font-bold'><User />{name}</p>

            <div className='flex justify-between'>
            <p className='flex gap-1'> <Flag /> {country}</p>
            <button className="btn">{role}</button>
            </div>
            <div className="divider m-0"></div>
            <p className='font-bold'>Rating ({rating})</p>
            <div className='flex justify-between'>
            <p className='font-bold'>{battingStyle}</p>
            <p>{bowlingStyle}</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>${price}</p>
                <button  onClick={() => {
                   if(coin < price){
                   return alert("Not enough coin")
                    
                   } else{
                    setCoin(coin - price)
                    setSelected(!selected)
                   } 
                    }}
                    className="btn" disabled={selected} >
                    {selected ? "selected" : "Choose player"} </button>
                
            </div>
        </div>
    );
};

export default Card;

/**
 * image upload site: imgbb
 * "name": "Shakib Al Hasan",
    "country": "Bangladesh",
    "role": "All-Rounder",
    "rating": 95,
    "battingStyle": "Left-Hand-Bat",
    "bowlingStyle": "Slow Left-Arm Orthodox",
    "price": "$2000000",
    "action": "Choose Player"
 * */ 