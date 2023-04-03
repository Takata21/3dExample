import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <section className="flex flex-col items-center justify-between w-full h-screen snap-center">
      <Navbar />
      <div className="h-screen snap-center w-[80vw] flex justify-between">
        <div className="left flex-[2] flex flex-col justify-center gap-3">
          <h1 className="text-7xl">Think. Make. Solve</h1>
          <div className="flex items-center gap-3">
            <img src="./img/line.png" alt="line" className="h-1" />
            <h3 className="text-[#da4ea2]">What we Do</h3>
          </div>
          <div className="desc">
            <p className="text-2xl text-gray-400">
              We enjoy creating delightful, human-centered digital experiences.
            </p>
            <button className="bg-[#da4ea2] text-white font-medium w-28 p-3 rounded-md mt-5">
              Learn More
            </button>
          </div>
        </div>
        <div className="right flex-[3] relative">
          <img
            src="./img/moon.png"
            alt="moon"
            className="w-[800px] h-[600px] object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-spaceMoon"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
