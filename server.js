const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// must add gzip to make our chunk and bundle files small on servers like heroku
// otherwise gzip of react does not work
// use npm compression package
const compression = require('compression');

if(process.env.Node_env !== 'production') 
  require('dotenv').config();
// give us back stripe obj
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
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

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
})



app.listen(port, error => {
  if (error) throw error;
  console.log('server running on ' + port);
});