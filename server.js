require('dotenv').config()

const { MongoClient } = require('mongodb');
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/todoRoutes')

//app
const app = express()

const client = new MongoClient(uri);

//midlleware 
app.use(express.json()) //-> 'req.body'

app.use('/api/todos', routes)

const connectToMongo = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
      console.log('connected to MongoDB');
      app.listen(process.env.PORT||3000, ()=> console.log('Server running'))
    } catch(error) {
      console.log('error connection to MongoDB:', error.message);
    }
  };

connectToMongo()

