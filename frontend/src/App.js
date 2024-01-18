import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import ExchangePage from './components/ExchangePage';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BruceCoin</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Crypto List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/exchange">Exchange</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<CryptoList />} />
                    <Route path="/exchange" element={<ExchangePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
