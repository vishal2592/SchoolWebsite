
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Admission from './Pages/Admission'
import Academics from './Pages/Academics'
import Faculty from './Pages/Faculty'
import CampusLife from './Pages/CampusLife'
import Gallery from './Pages/Gallery'
import NewsEvent from './Pages/NewsEvent'
import Contact from './Pages/Contact'
import FAQ from './Pages/FAQ'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Register from './Pages/register'

function App() {
 

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/admission' element={<Admission />} />
      <Route path='/academics' element={<Academics />} />
      <Route path='/faculty' element={<Faculty />} />
      <Route path='/campuslife' element={<CampusLife />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/newsevents' element={<NewsEvent />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
