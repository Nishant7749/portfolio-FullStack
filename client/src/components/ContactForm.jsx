
import apiContact from '../services/API'
import { toast } from 'react-toastify'
import { useState } from 'react'


export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '', lastname: '', email: '', subject: '', message: ''
    })

    const handleSubmit = async (e) => {
            e.preventDefault()

            try {
                await apiContact(formData)
                toast.success("Message Sent!")
                setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' })

            } catch (error) {
                console.error(error.message)
                toast.error("Failed Message!")
            }
        }
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="flex w-65 md:w-full flex-col gap-3 font-space">
                    <div className="flex flex-col md:flex-row gap-3">
                        <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="text" name='firstname' value={formData.firstname} onChange={handleChange} placeholder="First Name" />
                        <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="text" name='lastname' value={formData.lastname} onChange={handleChange} placeholder="Last Name" />
                    </div>
                    <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" name='email' value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
                    <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="text" name='subject' value={formData.subject} onChange={handleChange} placeholder="Subject" />
                    <textarea className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" name='message' value={formData.message} onChange={handleChange} placeholder="How Can I help?" />

                    <button type='submit' className="rounded-xl border-gray-300 bg-purple-400/50 p-3 text-gray-200 font-bold cursor-pointer hover:bg-purple-400 transition duration-300">Get In Touch</button>
                </form>
            </div>
        </>
    )
}