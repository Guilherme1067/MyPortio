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

interface WorksContainerProps {
  children: ReactNode;
}

function RightSideProjectBox({ src, number, name, description, link }: ProjectBox) {
  return (
    <div className="hover:animate-pulse mb-12 relative w-[628px] h-[455px] md:w-[530px] md:h-[403px] border-[0.5px]  border-border-gray md:left-[50%]">
      <img className='absolute top-[40px] md:right-[90px]' src={src} />
      <span className='absolute right-[60px] top-[48px] font-extrabold text-5xl jobs'>{number}</span>
      <div className='relative top-[348px] left-[84px]top-[128px] md:top-[103px] right-[336px] flex flex-col gap-2'>
        <p className='font-bold text-[40px] text-white max-w-[360px]'>{name}</p>
        <span className='text-base text-white'>{description}</span>
        <a href="" className='text-yellow text-base font-medium'>See project</a>
      </div>
    </div>
  )
}

function LeftSideProjectBox({ src, number, name, description, link }: ProjectBox) {
  return (
    <div className="hover:animate-pulse relative w-[628px] h-[455px] md:w-[530px] md:h-[403px] border-[0.5px]  border-border-gray ">
      <img className='absolute top-[40px] left-[90px]' src={src} />
      <span className='absolute left-[60px] top-[48px] font-extrabold text-5xl jobs'>{number}</span>
      <div className='relative top-[348px] left-[84px] md:left-[498px] md:top-[100px]  flex flex-col gap-2'>
        <p className='font-bold text-[40px] text-white '>{name}</p>
        <span className='text-base text-white '>{description}</span>
        <a href="#" className='text-yellow text-base font-medium'>See project</a>
      </div>
    </div>
  )
}

function WorksContainer({ children }: WorksContainerProps) {
  return (
    <div id="Works" className='flex flex-col gap-12 md:pt-20 md:px-44 sm:p-0  '>
      {children}
    </div>
  )
}

function SectionTitle() {
  return <p className='jobs font-extrabold text-2xl'>SELECTED WORK</p>
}

export function Works() {
  return (
    <WorksContainer >
      <SectionTitle />
      <LeftSideProjectBox src={project2} number="01" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
      <RightSideProjectBox src={notebook} number="02" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
      <LeftSideProjectBox src={project2} number="03" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
      <RightSideProjectBox src={notebook} number="04" name="PROJECT NAME IN ABOUT TWO LINES" description='Here comes a brief description about what was done during the project in three lines at maximum' />
    </WorksContainer>
  )
}