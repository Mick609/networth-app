// src/pages/MainPage.js
import React, { useState, useEffect } from 'react';

const MainPage = () => {
    const [stocks, setStocks] = useState([]);
    const [properties, setProperties] = useState([]);
    const [totalNetWorth, setTotalNetWorth] = useState(0);

    useEffect(() => {
        // Retrieve stocks and properties from localStorage
        const storedStocks = JSON.parse(localStorage.getItem('stocks')) || [];
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];

        setStocks(storedStocks);
        setProperties(storedProperties);

        // Calculate total net worth
        const totalStocksWorth = storedStocks.reduce(
            (acc, stock) => acc + stock.numberOfStocks * stock.pricePerShare,
            0
        );
        const totalPropertiesWorth = storedProperties.reduce(
            (acc, property) => acc + property.squareMeters * property.pricePerSquareMeter,
            0
        );
        const netWorth = totalStocksWorth + totalPropertiesWorth;
        setTotalNetWorth(netWorth);
    }, []);

    return (
        <div>
            <h1>Main Page</h1>
            <h2>Total Net Worth: ${totalNetWorth.toFixed(2)}</h2>
            <h3>Stocks</h3>
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index}>
                        {stock.stockName} - {stock.exchangeName} - {stock.numberOfStocks} shares at ${stock.pricePerShare.toFixed(2)}
                        <br />
                        Total Worth: ${(stock.numberOfStocks * stock.pricePerShare).toFixed(2)}
                    </li>
                ))}
            </ul>
            <h3>Properties</h3>
            <ul>
                {properties.map((property, index) => (
                    <li key={index}>
                        {property.propertyName} - {property.location} - {property.squareMeters} sqm at ${property.pricePerSquareMeter.toFixed(2)} per sqm
                        <br />
                        Total Worth: ${(property.squareMeters * property.pricePerSquareMeter).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainPage;
