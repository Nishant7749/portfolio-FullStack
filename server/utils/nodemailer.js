// const nodemailer = require('nodemailer');
// require('dotenv').config()

// const transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//         user: process.env.EMAIL_ID,
//         pass: process.env.PASSWORD,
//     }
// })


// const sendEmail = async ({ firstname, lastname, email, subject, message }) => {
//   await transporter.sendMail({
//     from: process.env.EMAIL_ID,
//     to: process.env.EMAIL_ID,
//     subject: `Portfolio Contact: ${subject || "New Message"}`,
//     html: `
//       <h2>New Portfolio Message</h2>

//       <p><strong>FirstName:</strong> ${firstname}</p>
//        <p><strong>LastName:</strong> ${lastname}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Subject:</strong> ${subject}</p>

//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//     `,
//   })
// }

// module.exports = sendEmail