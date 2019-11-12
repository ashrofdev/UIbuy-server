const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(cors())
app.use(bodyParser())
app.get('/request-item', (req, res)=>{
    var sg = require('sendgrid')('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');
    var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
        personalizations: [
        {
            to: [
            {
                email: 'ashsall115@gmail.com'
            }
            ],
            subject: 'Sending with SendGrid is Fun'
        }
        ],
        from: {
        email: 'ashsal2001@gmail.com'
        },
        content: [
        {
            type: 'text/plain',
            value: 'A client is requesting your product'
        }
        ]
    }
    })
    sg.API(request)
    .then(function (response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    }).then((e)=>{
        res.send('cool')
    })
    .catch(function (error) {
        // error is an instance of SendGridError
        // The full response is attached to error.response
        console.log(error.response.statusCode);
    });
})

app.listen(process.env.PORT)

