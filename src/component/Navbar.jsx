import { Ellipsis } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='shadow-md flex justify-between p-4'>
            <h1>My navbar</h1>
            <button><Ellipsis></Ellipsis></button>
        </div>
    );
};

export default Navbar;