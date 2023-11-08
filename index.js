const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3000


const app = express()

app.use('/images', express.static('public/images'))
app.use('/files', express.static('public/files'))


const routers = require('./routes/routers')
app.use('/api/v1', routers)

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})
