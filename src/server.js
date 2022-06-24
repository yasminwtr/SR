const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const routes = require('./queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.json({ info: 'API REST in running with success!' })
})

app.get('/userdata', routes.getUsers)
app.get('/userdata/:id', routes.getUserById)
app.post('/userdata', routes.createUser)
app.put('/userdata/:id', routes.updateUser)
app.delete('/userdata/:id', routes.deleteUser)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})