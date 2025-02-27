import { useState } from 'react'

import './App.css'
import MainSection from './Components/MainSection'
import HackIndiaVideoSection from './Components/HackIndiaVideoSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainSection/>
      <HackIndiaVideoSection/>
    </>
  )
}

export default App
