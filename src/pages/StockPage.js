import React, { useState, useEffect } from 'react';
import AddStockModal from '../components/AddStockModal';

const StockPage = () => {
    const [stocks, setStocks] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    // Retrieve stocks from localStorage when component mounts
    useEffect(() => {
        const storedStocks = JSON.parse(localStorage.getItem('stocks')) || [];
        setStocks(storedStocks);
    }, []);

    // Save stocks to localStorage whenever stocks state changes
    useEffect(() => {
        localStorage.setItem('stocks', JSON.stringify(stocks));
    }, [stocks]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const addStock = (newStock) => {
        setStocks([...stocks, newStock]);
    };

    return (
        <div>
            <h1>Stock</h1>
            <button onClick={handleOpenModal}>Add Stock</button>
            {isModalOpen && <AddStockModal onClose={handleCloseModal} addStock={addStock} />}
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index}>
                        {stock.stockName} - {stock.exchangeName} - {stock.numberOfStocks} shares at ${stock.pricePerShare.toFixed(2)}
                        <br />
                        Total Worth: ${(stock.numberOfStocks * stock.pricePerShare).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockPage;
