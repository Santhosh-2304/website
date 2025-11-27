import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SoftwareTraining from './pages/SoftwareTraining'
import SoftwareTech from './pages/SoftwareTech'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import AcademicTraining from './pages/AcademicTraining'
import TrainingTalent from './pages/TrainingTalent'
import CorporateTraining from './pages/CorporateTraining'
import Research from './pages/Research'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/software-training-services' element={<SoftwareTraining />} />
      <Route path='training-talent' element={<TrainingTalent />} />
      <Route path='/academic-training' element={<AcademicTraining />} />
      <Route path='/corporate-training' element={<CorporateTraining />} />
      <Route path='/software-technology-solutions' element={<SoftwareTech />} />
      <Route path='/research-development' element={<Research />} />
      <Route path ='/careers' element={<Careers />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path ='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
