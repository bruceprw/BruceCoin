import React from 'react';
import ExchangeForm from './ExchangeForm';

const ExchangePage = () => {
    return (
        <div>
            <h2>Crypto Exchange</h2>
            <ExchangeForm symbol="btc" />
            <ExchangeForm symbol="eth" />
            <ExchangeForm symbol="sol" />
        </div>
    );
};

export default ExchangePage;
