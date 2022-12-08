import mySelf from '../assets/itsme.jpg'
export function Info() {
  return (
    <main id="info" className=' flex items-center justify-center '>
      <div className=' border-solid border-border-gray rounded-full flex items-center justify-center'>
        <div className='flex items-center justify-center flex-col'>
          <img className="w-[418px] h-[418px] rounded-full " src={mySelf} />
          <p className=" absolute top-[375px] info text-[7.5rem] font-extrabold after:content-['DEVELOPER'] after:text-white">FRONTEND</p>

          <div className=' pt-14 flex items-center flex-col '>
            <div className=' flex gap-60 '>


              <p className=' text-white '>Hello, I am a front-end developer and problem solver <br /> with four years of experience working from Brazil.
                I <br /> aim to create high quality, responsive websites and <br />plataforms that offers the best experience. </p>

              <div className='flex gap-16 '>
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