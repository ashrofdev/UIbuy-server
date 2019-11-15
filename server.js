const express = require('express')
const app = express()
const nodemailer = require('nodemailer');


app.get('/', (req, res)=>{
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
            from: 'UI buy 🛒" <foo@example.com>', // sender address
            to: 'ashsall115@gmai.com, baz@example.com', // list of receivers
            subject: 'PRODUCT REQUEST ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>A client requested your product</b> <p>Wow, finally youve got a customer</p>' // html body
        });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    main().then(()=>res.json('sent')).catch((err)=>res.json(err));
})
