import React from 'react'

const Contact = () => {
  return (
    <div className='w-full mt-32 mb-32'>
      <div className='max-w-screen-xl mx-auto px-10 py-10 flex gap-32 mt-10 
      hover:bg-violet-500 rounded-2xl transition-all duration-[300ms] ease-in-out'>
        {/* left */}
        <div className='basis-1/2'>
          <h1 className='text-[5vw] font-medium mb-10'>Contact <span className='text-orange-500'>Us</span></h1>
          <p className='text-[2vw] mb-10'>
            We're here to help you with your tech needs. Feel free to reach out with
            any questions or inquiries.
          </p>
          
        </div>
        {/* Right div */}
        <div className='basis-1/2 flex flex-col gap-10 items-center bg-zinc-700 p-5 rounded-2xl hover:bg-zinc-600 transition-all duration-[300ms] ease-in-out'>
       
          <form> 
          <label htmlFor="" className='text-2xl text-orange-400'>Name</label>
            <input
              className='border-2 border-none p-2 mb-5 rounded-xl w-full focus:outline-none'
              type='text'
              placeholder='Name'
            />
            <label htmlFor="" className='text-2xl text-orange-400 '>Email</label>
            <input
              className='border-2 border-none p-2 mb-5 rounded-xl w-full mt-5 focus:outline-none'
              type='email'
              placeholder='Email'
            />
            <label htmlFor="" className='text-2xl text-orange-400 '>Message</label>
            <textarea
              className='p-2 border-none  rounded-xl w-full mt-5 focus:outline-none'
              placeholder='Message'
              rows={5}
              />
              </form>
              <button className='w-1/2 mt-5 bg-zinc-800 text-white rounded-2xl py-3 hover:bg-zinc-900 transition-all duration-[300ms] ease-in-out'>
                Send Message
              </button>
        </div>
      </div>
    </div>
  )
}

export default Contact