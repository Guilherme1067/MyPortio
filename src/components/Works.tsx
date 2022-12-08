import { ReactNode } from 'react'
import notebook from '/assets/notebook.png'
import project2 from '/assets/project2.png'


type ProjectBox = {
  src: string;
  number: string;
  name: string;
  description: string;
  link?: string

}
function RightSideProjectBox({ src, number, name, description, link }: ProjectBox) {
  return (
    <div className="relative w-[628px] h-[455px] md:w-[530px] md:h-[403px] border-[0.5px]  border-border-gray left-[600px]">
      <div className=''>
        <img className='absolute top-[40px] right-[90px]' src={src} />
        <span className='absolute right-[48px] top-[48px] font-extrabold text-5xl jobs'>{number}</span>
        <div className='relative top-[128px] md:top-[103px] right-[336px] flex flex-col gap-2'>
          <p className='font-bold text-[40px] text-white max-w-[360px]'>{name}</p>
          <span className='text-base text-white'>{description}</span>
          <a href="" className='text-yellow text-base font-medium'>See project</a>
        </div>
      </div>
    </div>
  )
}

function LeftSideProjectBox({ src, number, name, description, link }: ProjectBox) {
  return (
    <div className="relative w-[628px] h-[455px] md:w-[530px] md:h-[403px] border-[0.5px]  border-border-gray ">
      <div className=''>
        <img className='absolute top-[40px] left-[90px]' src={notebook} />
        <span className='absolute left-[48px] top-[48px] font-extrabold text-5xl jobs'>01</span>
        <div className='relative top-[128px] left-[594px] md:left-[498px] md:top-[100px]  flex flex-col gap-2'>
          <p className='font-bold text-[40px] text-white '>PROJECT NAME IN <br /> ABOUT TWO LINES</p>
          <span className='text-base text-white '>Here comes a brief description about what was done during the project in three lines at maximum</span>
          <a href="#" className='text-yellow text-base font-medium'>See project</a>
        </div>
      </div>
    </div>

  )

}

export function Works() {
  return (
    <div id="#jobs" className='flex flex-col gap-12 absolute top-[1048px] left-[425px] md:left-[156px]  '>
      <p className='jobs font-extrabold text-2xl'>SELECTED WORK</p>
      <LeftSideProjectBox src={project2} number="1" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
      <RightSideProjectBox src={project2} number="2" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
      <LeftSideProjectBox src={project2} number="3" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
      <RightSideProjectBox src={project2} number="4" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
    </div>
  )
}