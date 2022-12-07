import notebook from '/assets/notebook.png'
import project2 from '/assets/project2.png'

export function Works() {
  return (
    <div id="#jobs" className='flex flex-col gap-12 absolute top-[1048px] left-[425px] md:left-[271px] '>
      <p className='jobs font-extrabold text-2xl'>SELECTED WORK</p>
      <div className="relative w-[628px] h-[455px] border-[0.5px]  border-border-gray ">
        <div className=''>
          <img className='absolute top-[40px] left-[90px]' src={notebook} />
          <span className='absolute left-[48px] top-[48px] font-extrabold text-5xl jobs'>01</span>
          <div className='relative top-[128px] left-[594px] flex flex-col gap-2'>
            <p className='font-bold text-[40px] text-white'>PROJECT NAME IN <br /> ABOUT TWO LINES</p>
            <span className='text-base text-white '>Here comes a brief description about what was done during the project in three lines at maximum</span>
            <a href="#" className='text-yellow text-base font-medium'>See project</a>
          </div>
        </div>
      </div>

      <div className="relative w-[628px] h-[455px] border-[0.5px]  border-border-gray left-[600px]">
        <div className=''>
          <img className='absolute top-[40px] right-[90px]' src={project2} />
          <span className='absolute right-[48px] top-[48px] font-extrabold text-5xl jobs'>02</span>
          <div className='relative top-[128px] right-[336px] flex flex-col gap-2'>
            <p className='font-bold text-[40px] text-white'>PROJECT NAME IN <br /> ABOUT TWO LINES</p>
            <span className='text-base text-white '>Here comes a brief description about what was done during the project in three lines at maximum</span>
            <a href="#" className='text-yellow text-base font-medium'>See project</a>
          </div>
        </div>
      </div>

      <div className="relative w-[628px] h-[455px] border-[0.5px]  border-border-gray ">
        <div className=''>
          <img className='absolute top-[40px] left-[90px]' src={notebook} />
          <span className='absolute left-[48px] top-[48px] font-extrabold text-5xl jobs'>01</span>
          <div className='relative top-[128px] left-[594px] flex flex-col gap-2'>
            <p className='font-bold text-[40px] text-white'>PROJECT NAME IN <br /> ABOUT TWO LINES</p>
            <span className='text-base text-white '>Here comes a brief description about what was done during the project in three lines at maximum</span>
            <a href="#" className='text-yellow text-base font-medium'>See project</a>
          </div>
        </div>
      </div>

      <div className="relative w-[628px] h-[455px] border-[0.5px]  border-border-gray left-[600px]">
        <div className=''>
          <img className='absolute top-[40px] right-[90px]' src={project2} />
          <span className='absolute right-[48px] top-[48px] font-extrabold text-5xl jobs'>02</span>
          <div className='relative top-[128px] right-[336px] flex flex-col gap-2'>
            <p className='font-bold text-[40px] text-white'>PROJECT NAME IN <br /> ABOUT TWO LINES</p>
            <span className='text-base text-white '>Here comes a brief description about what was done during the project in three lines at maximum</span>
            <a href="#" className='text-yellow text-base font-medium'>See project</a>
          </div>
        </div>
      </div>
    </div>
  )
}