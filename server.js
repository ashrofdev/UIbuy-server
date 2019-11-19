const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express()

app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res)=>{
  request(
    { url: 'https://ashrofdev.github.io/UIbuy/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json('It worked')
      // let transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      //   port: 465,
        
      //   auth: {
      //     user: "ashsal2001@gmail.com",
      //     pass: "salmanashrafatmagul"
      //   },
      //   tls: {
          
      //     rejectUnauthorized: false
      //   }
      // });
    
    
      // let info = transporter.sendMail({
      //     from: 'ashsal2001@gmail.com', 
      //     to: 'ashsall115@gmail.com', 
      //     subject: 'PRODUCT REQUEST ✔', 
      //     text: 'Hello world?', 
      //     html: '<b>A client requested your product</b> <p>Wow, finally youve got a customer</p>' // html body
      // }).then(()=> res.json('nice')).catch((e)=>res.json('err', e))
    
      // console.log('Message sent: %s', info.messageId,);
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
    }
  )
  req = 'https://ashrofdev.github.io/UIbuy/'
    
})

app.listen(process.env.PORT)