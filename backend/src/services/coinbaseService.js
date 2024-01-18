const axios = require('axios');

const BASE_URL = 'https://api.exchange.coinbase.com';

async function getOrderBook(symbol) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${symbol}-USD/book`, {
            params: { level: 2 } // Level 2 provides a snapshot of the order book
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Coinbase order book:', error.message);
        throw error;
    }
}

function calculateBestPrice(orderBook, amount) {
    let remainingAmount = amount;
    let totalCost = 0;

    for (const [price, size] of orderBook.asks) {
        const available = parseFloat(size);
        const pricePerUnit = parseFloat(price);

        if (remainingAmount <= available) {
            totalCost += remainingAmount * pricePerUnit;
            break;
        } else {
            totalCost += available * pricePerUnit;
            remainingAmount -= available;
        }

        if (remainingAmount <= 0) break;
    }

    return totalCost;
}

exports.getPrice = async (symbol, amount) => {
    const orderBook = await getOrderBook(symbol);
    const totalCost = calculateBestPrice(orderBook, amount);
    return totalCost;
};
