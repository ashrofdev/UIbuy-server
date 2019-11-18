const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res)=>{
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
    
    
      let info = transporter.sendMail({
          from: 'ashsal2001@gmail.com', 
          to: 'ashsall115@gmail.com', 
          subject: 'PRODUCT REQUEST ✔', 
          text: 'Hello world?', 
          html: '<b>A client requested your product</b> <p>Wow, finally youve got a customer</p>' // html body
      }).then(()=> res.json('nice')).catch((e)=>res.json('err', e))
    
      console.log('Message sent: %s', info.messageId,);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
})

app.listen(process.env.PORT || 3000)