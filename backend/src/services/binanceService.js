const axios = require('axios');

const BASE_URL = 'https://api.binance.com';

async function getOrderBook(symbol) {
    try {
        const response = await axios.get(`${BASE_URL}/api/v3/depth`, {
            params: { symbol: `${symbol.toUpperCase()}USDT`, limit: 100 }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Binance order book:', error.message);
        throw error;
    }
}

function calculateBestPrice(orderBook, amount) {
    let remainingAmount = amount;
    let totalCost = 0;
    for (const [price, qty] of orderBook.asks) {
        const available = parseFloat(qty);
        const pricePerUnit = parseFloat(price);

        if (remainingAmount <= available) {
            totalCost += remainingAmount * pricePerUnit;
            break;
        } else {
            totalCost += available * pricePerUnit;
            remainingAmount -= available;
        }
    }
    return totalCost;
}

exports.getPrice = async (symbol, amount) => {
    const orderBook = await getOrderBook(symbol);
    const totalCost = calculateBestPrice(orderBook, amount);
    return totalCost;
};
