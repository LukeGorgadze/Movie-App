const express = require("express")
require('dotenv').config();
const cors = require("cors")
const mongoose = require("mongoose")
import * as path from 'path'
const authRoutes = require("./routes/AuthRoutes")
const checkUser = require("./middlewares/authmiddlewares")
const cookieParser = require("cookie-parser")
const app = express();

app.use(express.static(path.join(__dirname, "/Client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Client/build', 'index.html'));
});

app.listen(5000,(req,res) => {
  console.log("server started")

})


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Db connection successfull"))
  .catch(err => {
    console.log(err.message)
  })

  app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET","POST"],
    credentials: true
}))


app.use(cookieParser())
app.use(express.json());
app.use("/",authRoutes)