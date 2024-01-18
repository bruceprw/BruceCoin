const axios = require('axios');
const coinbaseService = require('../services/coinbaseService');

jest.mock('axios');

describe('Coinbase Service Tests', () => {
  test('Should calculate the correct price', async () => {
    const mockOrderBook = {
      asks: [['30000', '1'], ['31000', '2']]
    };

    axios.get.mockResolvedValue({ data: mockOrderBook });

    const price = await coinbaseService.getPrice('BTC', 2);

    expect(price).toEqual(30000 * 1 + 31000 * 1); // The first 1 BTC at $30,000 and the next 1 BTC at $31,000
  });

});