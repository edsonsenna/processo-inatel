const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const smartphones = require('./routes/smartphones.routes');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/smartphones', smartphones);

mongoose
  .connect('mongodb://admin:adm123@ds149557.mlab.com:49557/smartphones', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

const PORT = 8000;

app.listen(PORT, () => console.log('Server running on port ' + PORT));