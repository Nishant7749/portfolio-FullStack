import axios from 'axios'

const api = 'http://localhost:5000/contact'

const apiContact = async(formData)=> {
   return await axios.post(api, formData)
}

export default apiContact;
