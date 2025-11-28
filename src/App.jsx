import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SoftwareTechnology from './pages/SoftwareTechnology'
import TrainingTalent from './pages/TrainingTalent'
import AcademicTraining from './pages/AcademicTraining'
import CorporateTraining from './pages/CorporateTraining'
import Careers from './pages/Careers'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/training-talent' element={<TrainingTalent/>} />
      <Route path='/academic-training' element={<AcademicTraining />} />
      <Route path='/corporate-training' element={<CorporateTraining />} />
      <Route path='/software-technology-solutions' element={<SoftwareTechnology />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
