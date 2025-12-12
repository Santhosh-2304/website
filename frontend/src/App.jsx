import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import SoftwareTechnology from './pages/SoftwareTechnology'
import TrainingTalent from './pages/TrainingTalent'
import AcademicTraining from './pages/AcademicTraining'
import CorporateTraining from './pages/CorporateTraining'
import Careers from './pages/Careers'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SoftwareTraining from './pages/SoftwareTraining'
import ScrollToTop from './components/ScrollToTop'
import Research from './pages/Research'
import FullStack from './pages/FullStack'
import AppDev from './pages/AppDev'
import IT from './pages/IT'
import Consulting from './pages/Consulting'
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <>
    <Header />
    <ScrollToTop />
    <Toaster position="top-right" />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/software-training-services' element={<SoftwareTraining />} />
      <Route path='/training-talent' element={<TrainingTalent/>} />
      <Route path='/academic-training' element={<AcademicTraining />} />
      <Route path='/corporate-training' element={<CorporateTraining />} />
      <Route path='/software-technology-solutions' element={<SoftwareTechnology />} />
      <Route path='/research-development' element={<Research />} />
      <Route path='/fullstack' element={<FullStack />} />
      <Route path='/app-development' element={<AppDev />} />
      <Route path='/it' element={<IT />} />
      <Route path='/consulting' element={<Consulting />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App