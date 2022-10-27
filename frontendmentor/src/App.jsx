import { useState } from "react";
import icon1 from "./images/logo.svg";
import icon2 from "./images/image-web-3-desktop.jpg";
import icon3 from "./images/image-retro-pcs.jpg";
import icon4 from "./images/image-top-laptops.jpg";
import icon5 from "./images/image-gaming-growth.jpg";
import React from "react";

const App = () => {
  return (
    <div>
      <div className='flex justify-between mt-10 items-center mx-40'>
        <div>
          <img src={icon1}></img>
        </div>
        <div className='flex space-x-4'>
          <ul className='hover:text-softOrange cursor-pointer'>
            Home
          </ul>
          <ul className='hover:text-softOrange cursor-pointer'>
            New
          </ul>
          <ul className='hover:text-softOrange cursor-pointer'>
            Popular
          </ul>
          <ul className='hover:text-softOrange cursor-pointer'>
            Trending
          </ul>
          <ul className='hover:text-softOrange cursor-pointer'>
            Categories
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3 grid-flow-col gap-4 mt-20 mx-40'>
        <div className='col-span-2'>
          <img src={icon2}></img>
          <div className='grid grid-cols-2 grid-flow-col mt-8 gap-4 gap-15'>
            <div className='col-span-1 mr-20'>
              <p className='pr-4 text-4xl font-bold'>
                The Bright Future of Web 3.0?
              </p>
            </div>
            <div className='col-span-1'>
              <p className='text-sm'>
                We dive into the next evolution of the web
                that claims to put the power of the
                platforms back into the hands of the
                people.But is it really fulfilling its
                promise?
              </p>
              <button className='mt-10 bg-veryDarkBlue text-offWhite p-3 text-sm tracking-widest hover:text-softRed'>
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-baseline bg-veryDarkBlue p-5'>
          <p className='text-4xl text-softOrange'>New</p>
          <div className='py-7'>
            <h3 className='text-xl text-offWhite'>
              Hydrogen VS Electric Cars
            </h3>
            <p className='text-sm text-grayishBlue'>
              Will hydrogen-fueled cars ever catch up to
              Evs?
            </p>
          </div>
          <div className='py-7'>
            <h3 className='text-xl text-offWhite'>
              The Downsides of AI Artistry
            </h3>
            <p className='text-sm text-grayishBlue'>
              What are the possible adverse effects of
              on-demand AI image generation?
            </p>
          </div>
          <div className='py-7'>
            <h3 className='text-xl text-offWhite'>
              Is VC funding Drying Up?
            </h3>
            <p className='text-sm text-grayishBlue'>
              Private funding by VC firms is down 50% YOY.
              We take a look at what that means.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly mt-10 mx-40 mb-20'>
        <div className='flex h-32 cursor-pointer'>
          <img className='h-full pr-5' src={icon3}></img>
          <div>
            <p className='text-2xl text-gray'>01</p>
            <p className='font-bold hover:text-softRed'>Reviving Retro PCs</p>
            <p className='text-gray text-sm'>
              What happens when old PCs are given modern
              upgrades?
            </p>
          </div>
        </div>
        <div className='flex h-32 cursor-pointer'>
          <img className='h-full pr-5' src={icon4}></img>
          <div>
            <p className='text-2xl text-gray'>02</p>
            <p className='font-bold hover:text-softRed'>Top 10 laptops of 2022</p>
            <p className='text-gray text-sm'>
              Our best picks for various needs and budgets
            </p>
          </div>
        </div>
        <div className='flex h-32 cursor-pointer'>
          <img className='h-full pr-5' src={icon5}></img>
          <div>
            <p className='text-2xl text-gray'>03</p>
            <p className='font-bold hover:text-softRed'>The Growth of Gaming</p>
            <p className='text-gray text-sm'>
              How the pandemic has sparked fresh
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
