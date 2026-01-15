import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/sections/heroSection/heroSection'
import NotFound from './pages/notFound/notFound'
import Home from './pages/home/home'
import Services from './pages/services/services'
import Projects from './pages/projects/projects'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import ProjectDetail from './pages/projectDetails/projectDetail'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects/:id' element={<ProjectDetail/>} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
