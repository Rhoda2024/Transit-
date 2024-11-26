import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import NavBar from './components/Reusable/NavBar'
import About from './components/Pages/About'
import Service from './components/Pages/Service'
import Footer from './components/Reusable/Footer'

function App() {
  console.log("Hello")
  return (
   <div>
    <NavBar/>
  <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/about' element= {<About/>} />
    <Route path='/service' element= {<Service/>} />
  </Routes>
  <Footer/>
   </div>
  )
}

export default App
