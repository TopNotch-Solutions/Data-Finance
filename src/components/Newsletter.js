import React from 'react'

function Newsletter() {
  return (
    <div className='text-white my-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl py-2'>Want tips & tricks to optimize your flow</h1>
                <p>Sign up to our Newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email' placeholder='Enter email' className='p-3 w-full rounded text-black outline-none'/>
                    <button className='bg-[#00df9a] w-[200px] mx-auto py-3 font-medium rounded-md my-2 text-black md:ml-4'>Nofity Me</button>
                    
                </div>
                <p>We care about your protection of your data. Read our <span  className='text-[#00df9a] font-bold'>Newsletter</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter