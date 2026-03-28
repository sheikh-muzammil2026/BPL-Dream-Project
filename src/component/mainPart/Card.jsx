import { Flag, User } from 'lucide-react';
import React from 'react';

const Card = ({player}) => {
    const {image, name, country, role, rating, battingStyle, bowlingStyle, price, action} = player;
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
                <p className='font-bold'>{price}</p>
                <button className="btn">{action}</button>
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