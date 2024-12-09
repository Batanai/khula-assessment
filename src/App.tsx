import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Add padding to avoid overlap */}
        <Home />
      </div>
    </>
  )
}

export default App
