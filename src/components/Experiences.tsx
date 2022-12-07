
import BackUpIcon from '/assets/icons/backUpIcon.svg'
function ContactMe() {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex gap-2 flex-col">
        < h1 className="jobs text-3xl font-bold" > CONTACT ME</h1 >
        <p className=" text-white">Have a project in mind? <br />Reach out to me anytime.</p>
      </div >

      <div className="flex gap-[705px]">
        <p className=" text-white text-3xl" >guilherme1067@hotmail.com</p>

        <div className='flex gap-3 items-center cursor-pointer'>
          <a className="text-yellow font-semibold">Back to the top</a>
          <img className='w-4 h-4 cursor-pointer' src={BackUpIcon} />
        </div>
      </div>
    </div >
  )
}
export function Experiences() {
  return (
    <div className="relative top-[1650px] bg-black-dark w-full h-full border-b-[0.5px] border-border-gray pb-[68px] mb-[84px]">
      <div className=" flex-col relative flex gap-[184px] left-[240px] w-[86%]">
        <div className=" relative flex gap-[400px] left-[40px] top-[102px] ">
          <div className="flex gap-2 flex-col">
            <h1 className="jobs text-3xl font-bold">EXPERIENCES</h1>
            <p className="text-xl text-white">since 2019, I have helped <br /> many clients build great <br />websites in several<br /> market fields. </p>
          </div>
          <div className="flex flex-col gap-10" >
            <div  >
              <div className="flex border-solid border-b-[0.5px] border-white items-center border-border-gray pb-10 w-[569px] gap-20 ">
                <span className="text-white">2022 - present</span>
                <div >
                  <p className="text-white text-[40px]">AVENUE</p>
                  <span className="text-white">Frontend-Developer</span>
                </div>
              </div>
            </div >

            <div >
              <div className="flex border-solid border-b-[0.5px] border-white items-center border-border-gray pb-10 w-[569px] gap-20">
                <span className="text-white">2022 - present</span>
                <div >
                  <p className="text-white text-[40px]">SYMPLICITY</p>
                  <span className="text-white">Frontend-Developer</span>
                </div>
              </div>
            </div >

            <div >
              <div className="flex border-solid border-b-[0.5px] border-white items-center border-border-gray pb-10 w-[569px] gap-20">
                <span className="text-white">2022 - present</span>
                <div >
                  <p className="text-white text-[40px]">LOCKEY</p>
                  <span className="text-white">WEB SOFTWARE DEVELOPER / DEVELOPER INTERN</span>
                </div>
              </div>
            </div >
          </div>
        </div>
        <ContactMe />

      </div>
    </div>

  )
}