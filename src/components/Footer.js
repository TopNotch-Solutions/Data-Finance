import React from 'react';
import {FaDribbbleSquare,FaFacebook,FaGitSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';

function Footer() {
  return (
    <div className='max-w-[1240px] py-16 mx-auto px-4 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <div className='flex justify-between md:w-[70%] my-6'>
                <FaDribbbleSquare size={20} />
                <FaFacebook size={20} />
                <FaGitSquare size={20} />
                <FaInstagram size={20} />
                <FaTwitterSquare size={20} />
            </div>
        </div>
        <div className='flex justify-between md:items-center md:col-span-2'>
            <div>
                <h1 className='font-medium text-gray-400'>Solutions</h1>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Markets</li>
                    <li className='py-2 text-sm'>Socials</li>
                    <li className='py-2 text-sm'>Data</li>
                </ul>
            </div>
             <div>
                <h1 className='font-medium text-gray-400'>Solutions</h1>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Markets</li>
                    <li className='py-2 text-sm'>Socials</li>
                    <li className='py-2 text-sm'>Data</li>
                </ul>
            </div>
             <div>
                <h1 className='font-medium text-gray-400'>Solutions</h1>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Markets</li>
                    <li className='py-2 text-sm'>Socials</li>
                    <li className='py-2 text-sm'>Data</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer