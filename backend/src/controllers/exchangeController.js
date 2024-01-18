const binanceService = require('../services/binanceService');
const coinbaseService = require('../services/coinbaseService');

function parseQueryParams(query) {
    const amount = parseFloat(query.amount);
    const symbol = query.symbol ? query.symbol.toUpperCase() : null;

    if (isNaN(amount) || amount <= 0 || !symbol) {
        throw new Error('Invalid query parameters');
    }

    return { amount, symbol };
}

exports.getBestExchange = async (req, res) => {
    try {
        const { amount, symbol } = parseQueryParams(req.query);

        const binancePrice = await binanceService.getPrice(symbol, amount);
        const coinbasePrice = await coinbaseService.getPrice(symbol, amount);

        let bestExchange;
        let bestPrice;

        if (binancePrice < coinbasePrice) {
            bestExchange = 'binance';
            bestPrice = binancePrice;
        } else {
            bestExchange = 'coinbase';
            bestPrice = coinbasePrice;
        }

        res.json({
            symbol: symbol.toLowerCase(),
            cryptoAmount: amount,
            usdAmount: bestPrice,
            exchange: bestExchange
        });

    } catch (error) {
        console.error('Error in getBestExchange:', error.message);
        res.status(400).json({ error: error.message });
    }
};
