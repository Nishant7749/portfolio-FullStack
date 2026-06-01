import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import mascot from '../assets/mascot.png'
export default function Contact() {

    return(
        <>
        <div className='flex flex-col items-center justify-center'>

            <h1 className='font-space font-extrabold text-3xl m-5 text-white'>Anything To Ask?</h1>

            <div className='bg-gray-400/10 p-10 rounded-xl flex gap-5'>
            <ContactForm/>

            <div>
                <div className='absolute bg-purple-400/50 blur-3xl w-56 h-56 top-50 right-90'></div>
                <img className='w-96 h-72 relative z-10' src={mascot} alt="image" />
            </div>
            </div>

            <Footer/>    
        </div>
        </>
    )
}