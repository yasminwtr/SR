const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/queries')
const cors = require('cors');
const fs = require('fs');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({ limit: '15MB' }))

app.get('/', (request, response) => {
  response.json({ info: 'API REST running with success' })
});

app.post('/', (request, response) => {
  fs.writeFile('./out.png', request.body.imgsource, 'base64', (error) => {
    if (error) throw error
  })
  request.status(200)
})

app.put('/users/:id', routes.updateUser)

app.post('/registerWorker', routes.registerWorker)
app.post('/login', routes.authenticate)
app.post('/registerPerson', routes.postPerson)

app.get('/services', routes.getServices)
app.get('/getWorkersByServiceId', routes.getWorkersByServiceId)
app.get('/users', routes.getUsers)
app.get('/users/:id', routes.getUserById)
app.get('/workers', routes.getWorkers)
app.get('/workers/:id', routes.getWorkerById)
app.get('/getServicesFromUser/:id', routes.getServicesFromUser)


app.delete('/users/:id', routes.deleteUser)
app.delete('/workers/:id', routes.deleteWorkerService)

app.listen(3000, () => {
  console.log("API REST rodando em http://localhost:3000")
})
