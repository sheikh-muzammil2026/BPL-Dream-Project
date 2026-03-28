import React from 'react';
import dollar from '../../assets/dollar-1.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='shadow-md flex justify-between p-4 mt-4'>
            <img className='max-w-[76px]' src={logo} alt="" />
            <div className='flex gap-2.5 items-center'>
                <ul className='flex gap-2'>
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>Fixture</a></li>
                    <li><a href='#'>Teams</a></li>
                    <li><a href='#'>Schedules</a></li>
                </ul>
                <button className='btn font-bold'>0 Coin<img src={dollar} alt="dollar icon" /></button>
            </div>
        </div>
    );
};

export default Navbar;