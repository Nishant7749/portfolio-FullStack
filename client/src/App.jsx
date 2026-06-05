import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {

    return(
        <>
        <Navbar/>
        <Home/>

        <ToastContainer/>

        </>
    )
}