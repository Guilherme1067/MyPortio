import { ReactNode } from 'react';
import mySelf from '/assets/itsme.jpg'

interface InfoContainerProps {
  children: ReactNode;
}

function InfoContainer({ children }: InfoContainerProps) {
  return (<main id="About" className=' flex items-center justify-center '>
    <div className=' border-solid border-border-gray rounded-full flex items-center justify-center'>
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
      <img className="md:w-[418px] md:h-[418px] w-[220px] h-[220px] rounded-full " src={mySelf} />
      <p className=" absolute top-[375px] info text-[48px] md:text-[7.5rem] font-extrabold after:content-['DEVELOPER'] after:text-white">FRONTEND</p>
    </>
  )
}

function DescriptionContainer({ children }: InfoContainerProps) {
  return (
    <div className=' pt-14 flex md:flex-row flex-col md:gap-60 gap-10 '>
      {children}
    </div>
  )
}

function Description() {
  return <p className=' text-white '>Hello, I am a front-end developer and problem solver <br /> with four years of experience working from Brazil.
    I <br /> aim to create high quality, responsive websites and <br />plataforms that offers the best experience. </p>

}
function Education() {
  return (
    <div className='flex flex-col gap-5 md:gap-16 md:flex-row'>
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