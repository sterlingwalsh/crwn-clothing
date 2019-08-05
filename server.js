const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3001;

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

const whitelist = ['http://localhost:3000', 'https://crwn-web.herokuapp.com'];
const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) === -1) {
      const msg =
        'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
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

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port', port);
});
