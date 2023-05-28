import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainRoute from './routes/MainRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-poppins'>
      <MainRoute />
    </div>
  )
}

export default App
