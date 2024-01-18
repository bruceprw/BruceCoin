const express = require('express');
const axios = require('axios');
const exchangeController = require('../controllers/exchangeController');

const router = express.Router();

router.get('/exchange-routing', exchangeController.getBestExchange);

router.get('/cryptos', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 250,
                page: 1,
                sparkline: false
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from CoinGecko:', error.message);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;
