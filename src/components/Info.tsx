import { ReactNode, useEffect } from 'react';
import mySelf from '/assets/itsme.jpg'
import ReactGA from 'react-ga';

interface InfoContainerProps {
  children: ReactNode;
}

const skills = ["Javascript", "React JS", "Accessibility", "Typescript"]

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
      <p translate="no" className="  absolute top-[270px] sm:top-[420px]  info text-[48px] sm:text-[7.5rem] font-extrabold after:flex sm:flex after:content-['DEVELOPER'] after:text-white leading-10 md:leading-normal">FRONTEND</p>
    </>
  )
}

function DescriptionContainer({ children }: InfoContainerProps) {
  return (
    <div className=' sm:pt-24 flex sm:flex-row flex-col sm:gap-60 gap-12 '>
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
        {skills.map(skill => {
          return (
            <p key={skill} className='text-white text-sm sm:text-base'>{skill}</p>
          )
        })}
      </div>
    </div>
  )
}
export function Info() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
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