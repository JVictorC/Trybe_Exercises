const axios = require("axios")

async function priceBitCoin (req, res) {
  const priceBitCoins = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json)');

  return res.status(200).json(priceBitCoins.data)
}

module.exports = priceBitCoin
