import mySelf from '../assets/itsme.jpg'
export function Info() {
  return (
    <main id="info" className=' flex items-center justify-center top-[-513px] relative'>
      <div className=' w-[1500px] h-[1500px] border-[0.5px] border-solid border-border-gray rounded-full flex items-center justify-center'>
        <div className=' w-[900px] h-[900px] border-[0.5px] border-solid border-border-gray rounded-full flex items-center justify-center'>
          <img className="w-[418px] h-[418px] rounded-full " src={mySelf} />
          <div className=' flex items-center flex-col '>
            <p className="absolute info text-[7.5rem] font-extrabold top-[846px] left-[347px]  after:content-['DEVELOPER'] after:text-white">FRONTEND</p>
            <div className=' w-[628px] absolute top-[900px]'>
              <p className='absolute left-[-421px] top-[135px] text-white'>Hello, I am a front-end developer and problem solver <br /> with four years of experience working from Brazil.
                I <br /> aim to create high quality, responsive websites and <br />plataforms that offers the best experience. </p>

              <div className='flex gap-16 absolute left-[-421px] top-[283px]'>
                <div className='flex flex-col gap-4'>
                  <p className='text-yellow font-bold'>EDUCATION</p>
                  <p className='text-white'>Computer Science</p>
                  <p className='text-white'>FUMEC University</p>
                </div>

                <div className='flex flex-col gap-4'>
                  <p className='text-yellow font-bold'>TECHNOLOGIES</p>
                  <p className='text-white'>Javascript</p>
                  <p className='text-white'>React JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main >
  )
}