const express = require ('express')
const cors =    require('cors')
const mongoose =  require ('mongoose')
const {mongoUrl} = require('./keys')
const app = express();
const port = process.env.PORT || 5000
require('./models/model')
require('./models/post')

// cors
app.use(cors())

// data will come in  json formet(middleware function)
app.use(express.json())

// router
app.use(require('./routes/auth'))
app.use(require("./routes/createPost"))



// mongoose connection
mongoose.connect(mongoUrl)
 
// mongoose connection function
mongoose.connection.on("connected",() => {
    console.log("Successfully connected to mongo")
})

mongoose.connection.on("error",()=>{
    console.log("not connected to mongodb")
})

app.listen(port,()=>{
    console.log('server is running' + " " + port)
})