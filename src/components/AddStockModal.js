// src/components/AddStockModal.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating random IDs

const AddStockModal = ({ onClose, addStock }) => {
    const [stockName, setStockName] = useState('');
    const [exchangeName, setExchangeName] = useState('');
    const [numberOfStocks, setNumberOfStocks] = useState('');
    const [pricePerShare, setPricePerShare] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStock = {
            id: uuidv4(), // Generate a unique ID
            stockName,
            exchangeName,
            numberOfStocks: parseInt(numberOfStocks),
            pricePerShare: parseFloat(pricePerShare),
        };

        addStock(newStock); // Add the new stock to the state
        onClose(); // Close the modal
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Stock Name:
                        <input
                            type="text"
                            value={stockName}
                            onChange={(e) => setStockName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Exchange Name:
                        <input
                            type="text"
                            value={exchangeName}
                            onChange={(e) => setExchangeName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Number of Stocks:
                        <input
                            type="number"
                            value={numberOfStocks}
                            onChange={(e) => setNumberOfStocks(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Price per Share:
                        <input
                            type="number"
                            step="0.01"
                            value={pricePerShare}
                            onChange={(e) => setPricePerShare(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">OK</button>
                </form>
            </div>
        </div>
    );
};

export default AddStockModal;
