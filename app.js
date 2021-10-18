const express = require('express')
const routes = require('./routes/index')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()


// View Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    // Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    // Routes
app.use(routes)
    // Static files
app.use(express.static('views/images'))
app.use(express.static('views/'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))