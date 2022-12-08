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
    <div  >
      {jobs.map(job => {
        return (
          <div className="flex border-solid border-b-[0.5px] border-white items-center border-border-gray pb-10  gap-20 ">
            <span className="text-white">{job.period}</span>
            <div >
              <p className="text-white text-[40px]">{job.name}</p>
              <span className="text-white">{job.title}</span>
            </div>
          </div>
        )
      })}

    </div >
  )
}
export function Experiences() {
  return (
    <div id="experiences" className=" bg-black-dark pt-16 pl-44 ">
      <div className=" flex-col flex">
        <div className=" flex justify-between pr-44">
          <div className="flex gap-2 flex-col">
            <h1 className="jobs text-3xl font-bold">EXPERIENCES</h1>
            <p className="text-xl text-white">since 2019, I have helped <br /> many clients build great <br />websites in several<br /> market fields. </p>
          </div>
          <div className="flex flex-col gap-10" >
            <JobsInfo />
          </div>
        </div>
      </div>
    </div>

  )
}