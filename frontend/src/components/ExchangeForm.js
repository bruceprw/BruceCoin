import React, { useState } from 'react';
import axios from 'axios';

const ExchangeForm = ({ symbol }) => {
    const [amount, setAmount] = useState('');
    const [bestExchange, setBestExchange] = useState(null);

    const getBestExchange = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/exchange-routing`, {
                params: { symbol, amount }
            });
            setBestExchange(response.data);
        } catch (error) {
            console.error('Error fetching best exchange:', error);
        }
    };

    return (
        <div>
            <h3>Find Best Exchange for {symbol.toUpperCase()}</h3>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
            </div>
            <button className="btn btn-primary mb-3" onClick={getBestExchange}>Get Best Exchange</button>
            {bestExchange && (
                <div className="alert alert-info">
                    <p>Best Exchange: {bestExchange.exchange}</p>
                    <p>USD Amount: ${bestExchange.usdAmount}</p>
                    <p>Crypto Amount: {bestExchange.cryptoAmount} {bestExchange.symbol.toUpperCase()}</p>
                </div>
            )}
        </div>
    );
};

export default ExchangeForm;
