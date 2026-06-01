import './App.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'


export default function App() {

    return(
        <>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/works' element={<Works/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        </>
    )
}