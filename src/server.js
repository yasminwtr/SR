const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (response) => {
    response.json({ info: 'API REST in running with success!' })
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});