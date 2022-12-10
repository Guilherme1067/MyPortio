import { ReactNode } from "react"

interface ExperienceContainerProps {
  children: ReactNode;
}

const jobs = [{
  name: "AVENUE",
  title: "Front End Engineer",
  period: "May 2022 - present"
},
{
  name: "MOBLY",
  title: "Front End Engineer",
  period: "Apr 2022 - May 2022"
},
{
  name: "SYMPLICITY",
  title: "Front End Engineer",
  period: "Jul 2021 - Apr 2022"
},
{
  name: "SQUADS",
  title: "Software Developer",
  period: "Sep 2020 - Jul 2021"
},
{
  name: "LOCKEY",
  title: "WEB SOFTWARE DEVELOPER / DEVELOPER INTERN",
  period: "Sep 2020 - Jul 2021"
}
]

function JobsInfo() {
  return (
    <div className="flex flex-col gap-10 sm:pt-24" >

      {jobs.map(job => {
        return (
          <div key={job.name} className="flex flex-col gap-6 pb-6 md:flex-row border-solid border-b-[0.5px] border-white md:items-center border-border-gray md:pb-10 md:gap-20 ">
            <span className="text-white text-sm sm:text-base">{job.period}</span>
            <div >
              <p className="text-white text-[28px]  sm:text-[40px]">{job.name}</p>
              <span className="text-white text-sm sm:text-base">{job.title}</span>
            </div>
          </div>
        )
      })}
    </div >
  )
}

function ExperiencesContainer({ children }: ExperienceContainerProps) {
  return (
    <div id="Experiences" className=" bg-black-dark pl-[30px] sm:pl-11 width-[100vw] ">
      <div className=" flex flex-col">
        <div className=" flex flex-col sm:flex-row justify-between pr-44">
          {children}
        </div>
      </div>
    </div>
  )
}

function ExperienceDescription() {
  return (
    <div className="flex gap-2 flex-col pt-16 sm:pt-24">
      <h1 className="jobs text-[28px] sm:text-3xl font-bold ">EXPERIENCES</h1>
      <p className=" text-sm sm:text-xl text-white md:max-w-[300px] pb-8 ">since 2019, I have helped many clients build great websites in several market fields. </p>
    </div>
  )
}
export function Experiences() {
  return (
    <ExperiencesContainer>
      <ExperienceDescription />
      <JobsInfo />
    </ExperiencesContainer>
  )
}