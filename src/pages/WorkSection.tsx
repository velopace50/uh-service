import React from 'react';

import BlogCard from '../component/BlogCard';

import ChooseMaterial from '../img/ChooseMaterials.png';
import DottedShape from '../img/DottedShape.png';
import ReceiveEmail from '../img/ReceiveEmail.png';
import TellUs from '../img/TellsUs.png';

const WorkSection = () => {
  return (
    <div className="bg-light-50 pt-130">
      <div className="relative">
        <h2 className="text-center text-32 font-normal text-primary-100">
          How it works
        </h2>
        <div className="absolute top-0 left-0 z-0">
          <img src={DottedShape} alt="DottedShape" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-evenly pb-80 relative z-20">
          <BlogCard>
            <img src={ChooseMaterial} alt="ChooseMaterial" />
            <h3 className="font-bold text-18 text-light-500 text-center px-60 pt-24">
              Choose your materials or service package
            </h3>
            <p className="font-normal text-14 text-light-500 text-center px-25 pt-35">
              Access the largest selection of hardscape materials online, find
              the best prices and work with industry experts on planning out
              your project.
            </p>
          </BlogCard>
          <BlogCard>
            <img src={TellUs} alt="TellUs" />
            <h3 className="font-bold text-18 text-light-500 text-center px-50 pt-24">
              Tell us about your project in detail
            </h3>
            <p className="font-normal text-14 text-light-500 text-center px-25 pt-35">
              Provide us with as many details as possible, including photos of
              the area, a sketch with measurements, or photos of projects you
              like.
            </p>
          </BlogCard>
          <BlogCard>
            <img
              className="w-330 h-220 object-contain"
              src={ReceiveEmail}
              alt="ReceiveEmail"
            />
            <h3 className="font-bold text-18 text-light-500 text-center px-80 pt-24">
              Get your project going
            </h3>
            <p className="font-normal text-14 text-light-500 text-center px-20 pt-35">
              Review your quote, place your order online and get your materials
              delivered when you want, and receive bids on installation from
              local contractors through your Hardscape Hub™.
            </p>
          </BlogCard>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
