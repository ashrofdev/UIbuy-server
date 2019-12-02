const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json())
app.use(cors())


app.get('/send_mail', (req, res)=>{
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ashsal2001@gmail.com',
        pass: 'salmanashrafatmagul'
    }
    });

    const mailOptions = {
    from: 'ashsal2001@gmail.com',
    to: 'ashsall115@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'WOW it actually worked!  from UI buy'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.json(error)
    } else {
        console.log('Email sent: ' + info.response);
        res.json({
            result: info.response,
            k: test
        })
    }
    });

  
})


    

app.listen(process.env.PORT || 3005)