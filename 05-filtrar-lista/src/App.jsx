import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './list/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <List/>
      </div>
    </div>
  )
}

export default App
