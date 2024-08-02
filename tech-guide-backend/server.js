const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

//Middleware

app.use(cors());
app.use(bodyParser.json());

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect('mongodb://localhost:27017/tech-guide', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Einfache Route für Testzwecke
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });