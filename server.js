require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/todoRoutes')

//app
const app = express()

//midlleware 
app.use(express.json()) //-> 'req.body'

app.use('/api/todos', routes)

const connectToMongo = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
      console.log('connected to MongoDB');
      app.listen(3001, ()=> console.log('Server running'))
    } catch(error) {
      console.log('error connection to MongoDB:', error.message);
    }
  };

connectToMongo()
