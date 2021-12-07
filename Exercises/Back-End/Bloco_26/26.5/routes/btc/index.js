const app = require('express');
const priceBitCoin = require('../../middleWares/priceBitcon.middleware');
const verificationToke = require('../../middleWares/verificationToke.middleware');

const btcRouter = app.Router();

btcRouter
  .route('/price')
  .get(verificationToke, priceBitCoin)

module.exports = btcRouter