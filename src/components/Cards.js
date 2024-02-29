import React from 'react';
import Single from './assets/single.png';
import Double from './assets/double.png';
import Triple from './assets/triple.png';

function Cards() {
  return (
    <div className='w-full bg-white py-[5rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border border-gray-300 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} alt='/' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-xl font-bold'>N$149</p>
                <div className='text-center font-medium'>
                    <p className="py-2 border-b border-gray-300 mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
                    <p className="py-2 border-b border-gray-300 mx-8">Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto py-3 font-medium rounded-md my-6 text-black'>Start Trial</button>
            </div>
            <div className='w-full border bg-gray-300 border-gray-300 shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img src={Double} alt='/' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-xl font-bold'>N$349</p>
                <div className='text-center font-medium '>
                    <p className="py-2 border-b border-gray-300 mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
                    <p className="py-2 border-b border-gray-300 mx-8">Send up to 2 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] mx-auto py-3 font-medium rounded-md my-6'>Start Trial</button>
            </div>
            <div className='w-full border border-gray-300 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Triple} alt='/' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Trial User</h2>
                <p className='text-center text-xl font-bold'>N$549</p>
                <div className='text-center font-medium '>
                    <p className="py-2 border-b border-gray-300 mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
                    <p className="py-2 border-b border-gray-300 mx-8">Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto py-3 font-medium rounded-md my-6 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards