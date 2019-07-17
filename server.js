const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


if(process.env.Node_env !== 'production') 
  require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// any process come in make sure body and tag convert to json
app.use(bodyParser.json());
// make sure url in or out does not contain space symbols otherwise escape it
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// serve client application
if (process.env.Node_env === 'production') {
  // to serve all static files in build
  app.use(express.static(path.join(__dirname, 'client/build')));
  // to serve need route ,
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });  
}

app.listen(port, error => {
  if (error) throw error;
  console.log('server running on ' + port);
});