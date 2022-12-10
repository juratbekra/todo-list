const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        msg: 'hello world'
    })
})

app.listen(3030, () => {
    console.log('server is runing on port: https://localhost:3030')
})