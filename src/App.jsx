import { useState } from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen overflow-y-auto text-white App snap-mandatory snap-y scroll-smooth bg-hero-pattern">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  )
}

export default App
