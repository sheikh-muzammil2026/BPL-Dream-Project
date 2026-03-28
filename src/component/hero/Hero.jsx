import React from 'react';
import bannerLogo from '../../assets/banner-main.png';

const Hero = () => {
    return (
        <div className="relative rounded-md  min-h-[60vh] mt-4 flex items-center justify-center text-white overflow-hidden bg-[#0b0f19]">

  {/* LEFT GLOW */}
  <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[120px] rounded-full bottom-0 left-0"></div>

  {/* RIGHT GLOW */}
  <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-30 blur-[120px] rounded-full top-0 right-0"></div>

  {/* CONTENT */}
  <div className="text-center flex flex-col items-center z-10 py-16 gap-2.5">
    <img className='max-w-2xl' src={bannerLogo} alt="" />
    <h1 className="text-4xl font-bold">
      Assemble Your Ultimate Dream 11 Cricket Team
    </h1>
    <p className="mt-4 text-gray-300">
      Beyond Boundaries Beyond Limits
    </p>
    <button className="mt-6 px-6 py-2 bg-[#E7FE29] text-black rounded-full">
      Claim Free Credit
    </button>
  </div>

</div>
    );
};

export default Hero;