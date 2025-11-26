import Header from './components/Header'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SoftwareTraining from './pages/SoftwareTraining'
import SoftwareTechnology from './pages/SoftwareTechnology'
import Research from './pages/Research'
import Careers from './pages/Careers'
import About from './pages/About'
import Contact from './pages/Contact'
import TrainingTalent from './pages/TrainingTalent'
import AcademicTraining from './pages/AcademicTraining'
import CorporateTraining from './pages/CorporateTraining'

function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/software-training-services' element={<SoftwareTraining />} />
          <Route path='/training-talent' element={<TrainingTalent />} />
          <Route path='/academic-training' element={<AcademicTraining />} />
          <Route path='/corporate-training' element={<CorporateTraining />} />
        <Route path='/software-technology-solutions' element={<SoftwareTechnology />} />
        <Route path='/research-development' element={<Research />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
    </>
  )
}

export default App
