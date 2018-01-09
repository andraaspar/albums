const express = require('express')

let app = express()
app.use(express.static('./build'))
app.listen(8080, '0.0.0.0', () => console.log('Listening on 8080...'))