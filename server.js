const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
require('dotenv').config();
const {MONGOURI} = require('./config/keys');
var compression = require("compression");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
let User = require('./models/user.model');
const uri ="mongodb+srv://sparsh0112:04102000@cluster0-mtebo.gcp.mongodb.net/sparsh0112?retryWrites=true&w=majority";
mongoose.connect(MONGOURI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// serving static files
app.use(compression());
app.use('/uploads', express.static('uploads'));
//*************************************************************************

//---------------------------------------------------------------------------

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const imageuploadRouter = require('./routes/imageuploads');
const legenduploadRouter = require('./routes/legenduploads');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/imageupload', imageuploadRouter);
app.use('/legendupload', legenduploadRouter);

//const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static("client/build"));
if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
  app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"client","build", 'index.html'));
  })
  }

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

/*"start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"*/ 