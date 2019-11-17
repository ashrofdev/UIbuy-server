const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express()

app.use(cors)

app.get('/r', (req, res)=>{
    async function main() {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            
            auth: {
              user: "ashsal2001@gmail.com",
              pass: "salmanashrafatmagul"
            },
            tls: {
              
              rejectUnauthorized: false
            }
          });
    
        
        let info = await transporter.sendMail({
            from: 'ashsal2001@gmail.com', // sender address
            to: 'ashsall115@gmail.com', // list of receivers
            subject: 'PRODUCT REQUEST ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>A client requested your product</b> <p>Wow, finally youve got a customer</p>' // html body
        });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    main().then(()=>res.json('sent')).catch((err)=>console.log(err));
})

app.listen(process.env.PORT || 3001)