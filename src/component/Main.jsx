import React from 'react';

const Main = () => {
    return (
        <>
        <div className='available-players flex justify-between'>
        <h3>Available players</h3>
        <span>
            <button className="available">Available</button>
            <button className="selected">Selected</button>
        </span>
        </div>
        </>
    );
};

export default Main;