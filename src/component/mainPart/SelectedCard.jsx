import { Trash2 } from 'lucide-react';
import React from 'react';

const SelectedCard = ({player}) => {
    const {image, name, battingStyle} = player;
    return (
        <div className='shadow-md p-4 flex justify-between gap-4'>
            <div className='flex flex-col md:flex-row gap-4'>
                <img className='w-full h-[150px]' src={image} alt="" />
                <div className='whitespace-nowrap'>
                <p className='flex gap-1 font-bold'>{name}</p>
                <p className=''>{battingStyle}</p>
               
                </div>
            </div>
            <button className=""><Trash2></Trash2></button>
             
        </div>
    );
};

export default SelectedCard;