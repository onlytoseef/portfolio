import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
const ColoredLine = ({ color }: { color: string }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

export default function contact() {
  return (
    <div>
      <div className='contact-session'>
        <div className=' text-center'>
          <div data-aos='fade-up' className='contact-container pt-14'>
            <p className='text-[12px] text-white'>
              ___________________________________________ Say Hi !
            </p>
            <h1 className='text-vermili text-[50px]'>Have a Project ?</h1>
          </div>

          <div className='flex justify-center mt-0 pt-0 items-center     '>
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
                  <button
                    onClick={void 0}
                    className='border border-[0.5] mt-3 p-2 rounded-lg text-white '
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ColoredLine color='white' />
          <div className='flex sm:flex-row justify-between text-center  space-between m-auto sm:w-[77vw] flex-col'>
            <div className='flex justify-center mt-8 pb-8'>
              <a
                href='https://github.com/onlytoseef'
                target='blank'
                className='px-2 hover:fill-vermili'
              >
                {' '}
                <FaGithub color='white' className='hover:fill-vermili' />
              </a>
              <a
                href='https://www.facebook.com/devtoseef'
                target='blank'
                className='px-2 hover:fill-vermili'
              >
                {' '}
                <FaFacebook color='white' className='hover:fill-vermili' />
              </a>
              <a
                href='https://www.instagram.com/devtoseef/'
                className='px-2 hover:fill-vermili'
              >
                {' '}
                <FaInstagram color='white' className='hover:fill-vermili' />
              </a>

              <a
                href='https://www.linkedin.com/in/devtoseef/'
                target='blank'
                className='px-2 hover:fill-vermili'
              >
                {' '}
                <FaLinkedin color='white' className='hover:fill-vermili' />
              </a>
            </div>
            <div className='sm:mt-8 text-white justify-center font-[400] sm:pb-8'>
              All Rights Reserved With Toseef Rana
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
