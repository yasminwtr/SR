const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/queries')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (request, response) => {
    response.json({ info: 'API REST running with success' })
});

app.post('/login', routes.authenticate)
app.get('/services', routes.getServices)
app.post('/registerPerson', routes.postPerson)
app.get('/userdata', routes.getUsers)
app.get('/userdata/:id', routes.getUserById)
app.post('/userdata', routes.createUser)
app.put('/userdata/:id', routes.updateUser)
app.delete('/userdata/:id', routes.deleteUser)

app.listen(3000, () => {
    console.log("API REST rodando em http://localhost:3000")
})