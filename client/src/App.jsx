import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from './Context/AppContext'
import React from 'react'
import HomePage from './Pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import ProgramA from './Pages/ProgramA'
import ProgramB from './Pages/ProgramB'


function App() {


  return (
    <>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/program_A' element={<ProgramA />} />
          <Route path='/program_B' element={<ProgramB />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </>
  )
}

export default App
