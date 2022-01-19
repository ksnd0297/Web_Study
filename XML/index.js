const express = require('express')
const app = express()
const path = require('path')
// require('dotenv').config({path: __dirname + '/../' + '.env'})

app.use('/', express.static(path.join(__dirname, '/public')))
app.locals.moment = moment

app.get('/msg', (req, res) => {
    try {
        const {msg} = req.query
        if(!msg) throw "noData" 
        res.json({
            status: 200,
            time: 100,
            msg
        })
    } catch (e) {
        res.json({
            status: 400,
            time: 100,
            msg: e
        })
    }
    
})

app.listen(3000, (e) => {
    if(e) console.error(e)
    else console.log("Successfully Connected to Port 3000!!!")
})