import React, { useState } from 'react';
import PlayersCard from './playersCard';
import SelectedPlayers from './SelectedPlayers';

const Main = ({coin, setCoin}) => {
    console.log(coin, setCoin)
    const [selectedBtn, setSelectedBtn] = useState("available");
    return (
       <>
        <div className='flex flex-col md:flex-row justify-between text-center gap-6 mt-6'>
            <h3 className='font-bold'>{selectedBtn === "available" ? "Available Players" : "Selected Player (4/6)"}</h3>
           <div >
            <button onClick={() => setSelectedBtn("available")} className={`available btn rounded-r-none rounded-l-xl font-semibold ${selectedBtn === "available" ? 'bg-[#E7FE29]' : ''}`}>Available</button>
            <button onClick={() => setSelectedBtn("selected")} className={`selected btn rounded-l-none rounded-r-xl font-semibold ${selectedBtn === "selected" ? 'bg-[#E7FE29]' : ''}`}>Selected(0)</button>
           </div>
        </div>
        {
            selectedBtn === "available" ? <PlayersCard coin={coin} setCoin={setCoin}></PlayersCard> : <SelectedPlayers></SelectedPlayers>
        }
       </>
    );
};

export default Main;


/**
 * main theke player send korbo playerCard .and selected card e . 
 * */ 