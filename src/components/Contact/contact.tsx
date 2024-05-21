import React from 'react';

export default function contact() {
  return (
    <div>
      <div className='contact-session'>
        <div className=' text-center'>
          <div data-aos='fade-up' className='contact-container'>
            <p className='text-[12px] text-white'>
              ___________________________________________ Say Hi !
            </p>
            <h1 className='text-vermili text-[50px]'>Have a Project ?</h1>
          </div>

          <div className='flex justify-center items-center min-h-screen      '>
            <form className='w-[80vw]  bg-transparent p-8'>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                  <label
                    className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                    htmlFor='name'
                  >
                    Name:
                  </label>
                  <input
                    className='appearance-none block w-full bg-transparent  text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none'
                    id='name'
                    type='text'
                    placeholder='Hello...'
                  />
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                    htmlFor='email'
                  >
                    Email:
                  </label>
                  <input
                    className='appearance-none block w-full bg-transparent text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none'
                    id='email'
                    type='email'
                    placeholder='Where I respond you'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                    htmlFor='company'
                  >
                    Your company name:
                  </label>
                  <input
                    className='appearance-none block w-full bg-transparent text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none'
                    id='company'
                    type='text'
                    placeholder='Your company or website name if any...'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block uppercase tracking-wide  text-gray-300 text-xs font-bold mb-2'
                    htmlFor='message'
                  >
                    What's on your mind?
                  </label>
                  <textarea
                    className='appearance-none block w-full bg-transparent text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none h-48 resize-none'
                    id='message'
                    placeholder='Tell me about your ideas...'
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
