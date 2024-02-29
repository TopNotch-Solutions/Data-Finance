import React from 'react';
import Laptop from './assets/laptop.jpg';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt='/'className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTIC DASHBOARD</p>
                <h1 className='font-bold text-2xl py-2 sm:text-3xl md:text-4xl'>Manage Data Analytics Centrally</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button className='bg-[#00df9a] w-[200px] mx-auto py-3 font-medium rounded-md my-6 text-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics