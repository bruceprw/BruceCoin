import React, { useState, useEffect } from 'react';
import { fetchCryptos } from '../services/cryptoApi';

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [sortedCryptos, setSortedCryptos] = useState([]);

    useEffect(() => {
        const getCryptos = async () => {
            const data = await fetchCryptos();
            setCryptos(data);
            setSortedCryptos(data);
        };

        getCryptos();
    }, []);

    const sortAlphabetically = () => {
        const sorted = [...sortedCryptos].sort((a, b) => a.name.localeCompare(b.name));
        setSortedCryptos(sorted);
    };

    const sortByBiggestGain = () => {
        const sorted = [...sortedCryptos].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        setSortedCryptos(sorted);
    };

    const shuffleList = () => {
        const shuffled = [...sortedCryptos].sort(() => 0.5 - Math.random());
        setSortedCryptos(shuffled);
    };

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <button className="btn btn-primary me-2" onClick={sortAlphabetically}>Sort Alphabetically</button>
                    <button className="btn btn-success me-2" onClick={sortByBiggestGain}>Sort by 24h Gain</button>
                    <button className="btn btn-secondary" onClick={shuffleList}>Random Shuffle</button>
                </div>
            </div>
            <div className="row">
                {sortedCryptos.map(crypto => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={crypto.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{crypto.name}</h5>
                                <p className="card-text">${crypto.current_price}</p>
                                <p className="card-text">24h Change: {crypto.price_change_percentage_24h}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CryptoList;
