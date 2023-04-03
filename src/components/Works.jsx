import React from 'react'

function Works() {
  return (
    <section className="flex justify-center h-screen snap-center">
      <div className="-Container w-[80vw]  flex justify-between">
        <div className="flex items-center flex-1 left">
          <ul className="flex flex-col gap-5">
            <li className="text-[70px] WorkItem text-transparent relative font-bold after:content-['Web_Design'] ">
              <a href="" className="textStroke">
                Web Design
              </a>
            </li>
            <li className="text-[70px] WorkItem text-transparent font-bold relative after:content-['Development']">
              <a href="" className="textStroke">
                Development
              </a>
            </li>
            <li className="text-[70px] WorkItem text-transparent font-bold relative after:content-['Illustration'] ">
              <a href="" className="textStroke">
                Illustration
              </a>
            </li>
            <li className="text-[70px] WorkItem text-transparent font-bold relative after:content-['Product_Design'] ">
              <a href="" className="textStroke">
                Product Design
              </a>
            </li>
            <li className="text-[70px] WorkItem text-transparent font-bold relative after:content-['Social_Media'] ">
              <a href="" className="textStroke">
                Social Media
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 right">model</div>
      </div>
    </section>
  )
}

export default Works
