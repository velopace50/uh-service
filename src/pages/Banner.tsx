import React from 'react';

import Button from '../component/Button';
import Rectangle from '../img/Rectangle.png';
import Vector from '../img/Vector.png';

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center px-50 bg-secondary lg:flex-row">
      <div className="m-auto text-32 text-white font-bold">
        <h1 className="">America's Largest Online</h1>
        <h1 className="">
          Marketplace <span className="font-normal">for Hardscape</span>
        </h1>
        <h1 className="font-normal mb-35">Materials</h1>
        <Button
          label="Get Started"
          bg_color="bg-gradient-to-r from-warning to-warning-400"
          font_size="text-14 font-bold"
          padding="px-24 py-14"
          border="rounded-8 shadow"
          hover="hover:to-warning-100"
        />
      </div>
      <div className="relative mt-35 -mb-120">
        <img
          className="w-435 h-395 lg:w-535 lg:h-495"
          src={Vector}
          alt="Vector"
        />
        <img
          className="absolute top-0 left-0 w-430 h-340 lg:w-530 lg:h-440"
          src={Rectangle}
          alt="Rectangle"
        />
      </div>
    </div>
  );
};

export default Banner;
