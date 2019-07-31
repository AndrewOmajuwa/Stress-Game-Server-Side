const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()


app.use(cors())
app.use(jsonParser)
app.use(user)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port: ${port}`))
