import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet context={{theme, setTheme}}/>
    </>
  )
}

export default App
