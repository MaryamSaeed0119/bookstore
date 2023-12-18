import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminScreen from './screens/AdminScreen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminScreen />
    </>
  )
}

export default App
