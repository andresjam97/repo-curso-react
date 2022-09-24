import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CountDown from './Countdown/Countdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <CountDown/>
      </div>
    </div>
  )
}

export default App
