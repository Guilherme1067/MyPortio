import { ReactNode, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';

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
  period: "Feb 2019 - Sep 2020"
}
]

function JobsInfo() {
  return (
    <div data-aos="zoom-in-up" className="flex flex-col gap-10 sm:pt-24" >
      {jobs.map(job => {
        return (
          <div key={job.name} className="flex flex-col gap-6 pb-6 md:flex-row border-solid border-b-[0.5px] border-white md:items-center border-border-gray md:pb-10 md:gap-20 sm:w-auto w-[100vw] justify-center items-center">
            <span className="text-white text-sm sm:text-base">{job.period}</span>
            <div className="flex flex-col gap-1 items-center " >
              <p translate="no" className="text-white text-[28px]  sm:text-[40px]">{job.name}</p>
              <span translate="no" className="text-white text-sm sm:text-base">{job.title}</span>
            </div>
          </div>
        )
      })}
    </div >
  )
}

function ExperiencesContainer({ children }: ExperienceContainerProps) {
  return (
    <div id="Experiences" className=" bg-black-dark  width-[100vw] ">
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
    <div data-aos="slide-right" className="flex gap-2 flex-col pt-16 sm:pt-24 pl-[30px] sm:pl-11">
      <h1 className="jobs text-[28px] sm:text-3xl font-bold ">EXPERIENCES</h1>
      <p className=" text-sm sm:text-xl text-white w-[300px] pb-8 ">Since 2019, I have helped many clients build great websites in several market fields. </p>
    </div>
  )
}
export function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <ExperiencesContainer>
      <ExperienceDescription />
      <JobsInfo />
    </ExperiencesContainer>
  )
}