import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Componets/Background'
import Froground from './Componets/Froground'
import Card from './Componets/Card'

function App() {
  return (
<>
<div className=" relative w-full h-screen bg-[#ffffff]">
  <Background />
<Froground />
  </div>

</>
  )
}

export default App
