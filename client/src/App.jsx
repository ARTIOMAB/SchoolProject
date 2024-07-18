import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from './Context/AppContext'
import { ToastContainer } from 'react-toastify'
import HomePage from './Pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import ProgramA from './Pages/ProgramA'
import ProgramB from './Pages/ProgramB'
import About from './Pages/About'
import Registration from './Pages/Registration'
import RegistrationMenu from './Pages/RegistrationMenu'
import Admin from './Admin/Admin'
import AdminLogin from './Admin/AdminLogin'



function App() {


  return (
    <>
      <ContextProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/program_A' element={<ProgramA />} />
          <Route path='/program_B' element={<ProgramB />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/RegistrationMenu' element={<RegistrationMenu />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<AdminLogin />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </>
  )
}

export default App
