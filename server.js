
const express = require("express")
const helmet = require("helmet")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config() 


// const PORT = process.env.PORT

const app = express()
app.use(helmet())

app.use(require("./routes/index.js"))


app.listen(process.env.PORT, function () {
  console.log(`Express app listening on port ${process.env.PORT}`)

})
app.get('/', (req, res) => {
  res.send("hello world")
})


const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uooen.mongodb.net/My_Blog?retryWrites=true&w=majority`

mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("error", function(error) {
  if (process.env.NODE_ENV === "production") {
    console.log(error)
  }
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

// mongoose.connect(config.database, (error) => {
//   if(error) console.error(error);
//   else console.log('connected to db ' + config.database);
// });


// app.use(helmet())

// app.use(require("./routes/index.js"))
// app.listen(PORT, function () {
//   console.log(`Express app listening on port ${PORT}`)
// })
// app.get("/", function(req, res) {
//   res.send("hello world")
// })


