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

app.put('/users/:id', routes.updateUser)
app.post('/registerWorker', routes.registerWorker)
app.post('/login', routes.authenticate)
app.post('/registerPerson', routes.postPerson)
app.get('/services', routes.getServices)
app.get('/getWorkersByServiceId', routes.getWorkersByServiceId)
app.get('/users', routes.getUsers)
app.get('/users/:id', routes.getUserById)
app.delete('/users/:id', routes.deleteUser)
app.delete('/DeleteWorkerService/:id', routes.DeleteWorkerService)
app.get('/getServicesFromUser/:id', routes.getServicesFromUser)

app.listen(3000, () => {
  console.log("API REST rodando em http://localhost:3000")
})
