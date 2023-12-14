require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
//express
const app = express()

//middlemare
app.use(express.json())
app.use((req, res, next)=>{
  console.log(req.path,req.method);
  next()
})

//routes
app.use('/api/workouts',workoutRoutes )
app.use('/api/user',userRoutes )

//connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
      //listen to req
      app.listen(process.env.PORT, ()=> {
      console.log("connected to DB & port to",process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log(error);
  })


