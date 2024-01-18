const { getBestExchange } = require('../controllers/exchangeController');
const binanceService = require('../services/binanceService');
const coinbaseService = require('../services/coinbaseService');

jest.mock('../services/binanceService');
jest.mock('../services/coinbaseService');

describe('Exchange Controller Tests', () => {
  test('Should return the best exchange rate', async () => {
    const req = {
      query: { symbol: 'BTC', amount: '2' }
    };
    const res = {
      json: jest.fn()
    };

    binanceService.getPrice.mockResolvedValue(60000); // Assuming 2 BTC = $60,000 on Binance
    coinbaseService.getPrice.mockResolvedValue(61000); // Assuming 2 BTC = $61,000 on Coinbase

    await getBestExchange(req, res);

    expect(res.json).toHaveBeenCalledWith({
        symbol: 'btc',
        cryptoAmount: 2,
        usdAmount: 60000,
        exchange: 'binance'
 });
    })
});
