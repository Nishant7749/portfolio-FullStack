import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {

    return(
        <>
        <Navbar/>
        <Home/>

        <ToastContainer/>
        <Analytics />

        </>
    )
}