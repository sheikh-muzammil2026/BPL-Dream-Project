import React, { useState } from 'react';
import PlayersCard from './playersCard';
import SelectedPlayers from './SelectedPlayers';

const Main = () => {
    const [selectedBtn, setSelectedBtn] = useState("available");
    return (
       <>
        <div className='flex justify-between gap-6 mt-6'>
            <h3 className='font-bold'>{selectedBtn === "available" ? "Available Players" : "Selected Player (4/6)"}</h3>
           <div >
            <button onClick={() => setSelectedBtn("available")} className={`available btn rounded-r-none rounded-l-xl font-semibold ${selectedBtn === "available" ? 'bg-[#E7FE29]' : ''}`}>Available</button>
            <button onClick={() => setSelectedBtn("selected")} className={`selected btn rounded-l-none rounded-r-xl font-semibold ${selectedBtn === "selected" ? 'bg-[#E7FE29]' : ''}`}>Selected(0)</button>
           </div>
        </div>
        {
            selectedBtn === "available" ? <PlayersCard></PlayersCard> : <SelectedPlayers></SelectedPlayers>
        }
       </>
    );
};

export default Main;