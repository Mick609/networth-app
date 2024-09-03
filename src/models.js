// src/models.js
const db = require('./database');
const { v4: uuidv4 } = require('uuid');

// Function to add a stock
const addStock = (stockName, exchangeName, numberOfStocks, pricePerShare) => {
    const id = uuidv4();
    db.run(`INSERT INTO stocks (id, stock_name, exchange_name, number_of_stocks, price_per_share)
          VALUES (?, ?, ?, ?, ?)`,
        [id, stockName, exchangeName, numberOfStocks, pricePerShare],
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Stock ${stockName} added to the database.`);
        });
};

// Function to add a property
const addProperty = (propertyName, location, pricePerSquareMeter) => {
    const id = uuidv4();
    db.run(`INSERT INTO properties (id, property_name, location, price_per_square_meter)
          VALUES (?, ?, ?, ?)`,
        [id, propertyName, location, pricePerSquareMeter],
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Property ${propertyName} added to the database.`);
        });
};

module.exports = { addStock, addProperty };
