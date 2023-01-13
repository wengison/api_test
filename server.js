require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/todoRoutes')

// //

//app
const app = express()



//midlleware 
app.use(express.json()) //-> 'req.body'

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/api/todos', routes)

const connectToMongo = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
      console.log('connected to MongoDB');
      app.listen(process.env.PORT||3000, ()=> console.log('Server running & it is public'))
    } catch(error) {
      console.log('error connection to MongoDB:', error.message);
    }
  };

connectToMongo()

