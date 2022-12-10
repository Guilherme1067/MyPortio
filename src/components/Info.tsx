import { ReactNode } from 'react';
import mySelf from '/assets/itsme.jpg'

interface InfoContainerProps {
  children: ReactNode;
}

function InfoContainer({ children }: InfoContainerProps) {
  return (<main id="About" className=' flex items-center justify-center '>
    <div className='rounded-full flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col'>

        {children}
      </div>
    </div>
  </main>
  )
}

function PhotoAndTitle() {
  return (
    <>
      <img className="sm:w-[418px] sm:h-[418px] w-[220px] h-[220px] rounded-full mt-7" src={mySelf} />
      <p className=" absolute top-[270px] sm:top-[420px]  info text-[48px] sm:text-[7.5rem] font-extrabold after:flex sm:flex after:content-['DEVELOPER'] after:text-white">FRONTEND</p>
    </>
  )
}

function DescriptionContainer({ children }: InfoContainerProps) {
  return (
    <div className=' pt-14 flex sm:flex-row flex-col sm:gap-60 gap-12 '>
      {children}
    </div>
  )
}

function Description() {
  return <p className=' text-white w-[316px] sm:w-[628px] mt-12 sm:mt-0 text-sm sm:text-base '>Hello, I am a front-end developer and problem solver  with four years of experience working from Brazil.
    I aim to create high quality, responsive websites and plataforms that offers the best experience. </p>

}
function Education() {
  return (
    <div className='flex gap-11 sm:gap-16 sm:flex-row '>
      <div className='flex flex-col gap-4'>
        <p className='text-yellow font-bold'>EDUCATION</p>
        <p className='text-white text-sm sm:text-base'>Computer Science</p>
        <p className='text-white'>FUMEC University</p>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-yellow font-bold'>TECHNOLOGIES</p>
        <p className='text-white text-sm sm:text-base'>Javascript</p>
        <p className='text-white text-sm sm:text-base'>React JS</p>
      </div>
    </div>
  )
}
export function Info() {
  return (
    <InfoContainer>
      <PhotoAndTitle />
      <DescriptionContainer>
        <Description />
        <Education />
      </DescriptionContainer>
    </InfoContainer >
  )
}