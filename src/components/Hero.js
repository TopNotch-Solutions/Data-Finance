import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Switch } from 'antd';

function Hero() {
    const [switchColor, setSwitchColor] = useState('#A2A1A8');
    const handlSwitch = () =>{
        setSwitchColor(switchColor === '#34C759' ? '#A2A1A8': '#34C759')
    }
    const switchStyle = {
        backgroundColor: switchColor,
    }
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen text-center flex flex-col mx-auto justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWTH WITH DATA ANALYTICS</p>
            <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl'>Grow with software.</h1>
            <div className='flex justify-center items-center'>
                <p className='font-bold text-xl sm:text-2xl md:text-3xl'>Fast, flexible financing for </p>
                <ReactTyped
                    className='font-bold text-xl sm:text-2xl md:text-3xl md:ml-2'
                    strings={[
                        "Front-end",
                        "Back-end",
                        "DB Admin",
                    ]}
                    typeSpeed={120}
                    backSpeed={130}
                    loop
                    >
                </ReactTyped>
            </div>
            <p className='font-bold font-xl md:text-2xl text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className='bg-[#00df9a] w-[200px] mx-auto py-3 font-medium rounded-md my-6 text-black'>Get Started</button>
            <div className='w-full flex justify-end items-end hidden'>
                <div className='w-[10px]'>
                <Switch  style={switchStyle} onClick={handlSwitch}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero