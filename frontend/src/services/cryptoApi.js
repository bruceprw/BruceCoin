import axios from 'axios';

const API_URL = 'http://localhost:4000/api/cryptos';
export const fetchCryptos = async () => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 250,
                page: 1,
                sparkline: false
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        throw error;
    }
};
