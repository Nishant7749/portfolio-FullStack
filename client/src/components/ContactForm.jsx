
export default function ContactForm() {

    return(
        <>
        <div className="">
            <form className="flex flex-col gap-3 font-space">
                <div className="flex gap-3">
                <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="text" placeholder="First Name" />
                <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="text" placeholder="Last Name" />
</div>
                <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="email" placeholder="Email" />
                <input className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="email" placeholder="Subject" />
                <textarea className="border text-white bg-gray-400/10 border-gray-400/20 rounded-md p-2 outline-none" type="text" placeholder="How Can I help?" />

                <button className="rounded-xl border-gray-300 bg-purple-400/50 p-3 text-gray-200 font-bold cursor-pointer hover:bg-purple-400 transition duration-300">Get In Touch</button>
            </form>
        </div>
        </>
    )
}