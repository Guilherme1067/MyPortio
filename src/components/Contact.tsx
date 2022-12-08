import BackUpIcon from '/assets/icons/backUpIcon.svg'

export function ContactMe() {
  return (
    <div id="contact" className="bg-black-dark flex flex-col gap-10 border-b-[0.5px] border-border-gray pb-[68px] mb-[84px] pt-32 pl-44 ">
      <div className="flex gap-2 flex-col">
        < h1 className="jobs text-3xl font-bold" > CONTACT ME</h1 >
        <p className=" text-white">Have a project in mind? <br />Reach out to me anytime.</p>
      </div >

      <div className="flex items-center justify-between">
        <p className=" text-white text-3xl" >guilherme1067@hotmail.com</p>

        <div className='flex gap-3 items-center cursor-pointer pr-40'>
          <a href="#info" className="text-yellow font-semibold">Back to the top</a>
          <img className='w-4 h-4 cursor-pointer' src={BackUpIcon} />
        </div>
      </div>
    </div >
  )
}