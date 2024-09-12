const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

// conncet to MongoDB
mongoose.connect('mongodb+srv://yasinkapi97:PuLemFhbCYhroNPS@yasin.bmlgxns.mongodb.net/?retryWrites=true&w=majority&appName=Yasin');


  // simple route for testing
app.get('/', (req, res) => {
    res.send('Hello from the backend !');
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  console.log('Backend started..');