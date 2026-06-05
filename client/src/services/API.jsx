import axios from 'axios'

const api = 'https://portfolio-fullstack-kbnk.onrender.com/contact'

const apiContact = async(formData)=> {
   return await axios.post(api, formData)
}

export default apiContact;
