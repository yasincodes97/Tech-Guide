import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';

const app = express();
const port = 5000;

// Middleware

app.use(cors());
app.use(json());

// conncet to MongoDB
connect('mongodb+srv://yasinkapi97:PuLemFhbCYhroNPS@yasin.bmlgxns.mongodb.net/?retryWrites=true&w=majority&appName=Yasin');


  // simple route for testing
app.get('/', (req, res) => {
    res.send('Hello from the backend !');
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  console.log('Backend started..');