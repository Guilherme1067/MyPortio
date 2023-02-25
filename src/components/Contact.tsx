import { ReactNode, useEffect } from 'react'
import BackUpIcon from '/assets/icons/backUpIcon.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ContactMeContainer {
  children: ReactNode;
}

function ContactMeContainer({ children }: ContactMeContainer) {
  return (
    <div id="Contact me" className="bg-black-dark flex flex-col gap-10 border-b-[0.5px] border-border-gray pb-[68px] pt-32 pl-[30px] sm:pl-11 ">
      {children}
    </div>
  )
}

function ContactMeLeftSide() {
  return (
    <div data-aos="slide-right" className="flex gap-2 flex-col">
      < h1 className="jobs text-3xl font-bold" > CONTACT ME</h1 >
      <p className=" text-white text-sm sm:text-base">Have a project in mind? <br />Reach out to me anytime.</p>
    </div >
  )
}

function ContactMeRightSide() {
  return (
    <div data-aos="slide-up" className="flex sm:flex-row flex-col sm:items-center  justify-between gap-12 ">
      <p className=" text-white sm:text-3xl text-xl" >guilherme1067@hotmail.com</p>
      <a href="#About" className="text-yellow hover:animate-pulse font-semibold flex gap-3 items-center cursor-pointer pr-0 sm:pr-40" title="Back to the Top(Icon to go back up to the first section of the page)" >
        Back to the top
        <img className='w-4 h-4 cursor-pointer' src={BackUpIcon} alt="Icon to go back to the first page section" />
      </a>
    </div>
  )
}

export function ContactMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <ContactMeContainer>
      <ContactMeLeftSide />
      <ContactMeRightSide />
    </ContactMeContainer>
  )
}