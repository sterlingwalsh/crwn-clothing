const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const whitelist = [];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else if (process.env.NODE_ENV === 'production') {
  app.use(cors(corsOptions));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  console.log('receive payment request');
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.log('stripeErr', stripeErr);
      res.status(500).send({ error: stripeErr });
    } else {
      console.log('stripeRes', stripeRes);
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port', port);
});
