import { ReactNode } from 'react'
import BackUpIcon from '/assets/icons/backUpIcon.svg'

interface ContactMeContainer {
  children: ReactNode;
}

function ContactMeContainer({ children }: ContactMeContainer) {
  return (
    <div id="Contact me" className="bg-black-dark flex flex-col gap-10 border-b-[0.5px] border-border-gray pb-[68px] mb-[84px] pt-32 pl-44 ">
      {children}
    </div>
  )
}

function ContactMeLeftSide() {
  return (
    <div className="flex gap-2 flex-col">
      < h1 className="jobs text-3xl font-bold" > CONTACT ME</h1 >
      <p className=" text-white">Have a project in mind? <br />Reach out to me anytime.</p>
    </div >
  )
}

function ContactMeRightSide() {
  return (
    <div className="flex items-center justify-between">
      <p className=" text-white text-3xl" >guilherme1067@hotmail.com</p>
      <div className='flex gap-3 items-center cursor-pointer pr-40'>
        <a href="#info" className="text-yellow font-semibold">Back to the top</a>
        <img className='w-4 h-4 cursor-pointer' src={BackUpIcon} />
      </div>
    </div>
  )
}

export function ContactMe() {
  return (
    <ContactMeContainer>
      <ContactMeLeftSide />
      <ContactMeRightSide />

    </ContactMeContainer>
  )
}