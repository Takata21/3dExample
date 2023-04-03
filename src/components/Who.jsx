import React from 'react'

function Who() {
  return (
    <section className="flex justify-center w-full h-screen snap-center">
      <div className="h-screen snap-center w-[80vw] flex justify-between">
        <div className="left flex-[3] relative">
          <img
            src="./img/astro.png"
            alt="moon"
            className="w-[800px] h-[600px] object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-spaceMoon"
          />
        </div>
        <div className="right flex-[2] flex flex-col justify-center gap-3">
          <h1 className="text-5xl font-bold">
            Think. Outside the square space
          </h1>
          <div className="flex items-center gap-3">
            <img src="./img/line.png" alt="line" className="h-1" />
            <h3 className="text-[#da4ea2]">Who we Are</h3>
          </div>
          <div className="desc">
            <p className="text-2xl text-gray-400">
              a creative of designer and developers with a passion for the arts.
            </p>
            <button className="bg-[#da4ea2] text-white font-medium  p-3 rounded-md mt-5">
              See our works
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Who
