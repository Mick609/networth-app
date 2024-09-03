// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'; // Add specific sidebar styles here if necessary

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">Main</Link>
            <Link to="/stock">Stock</Link>
            <Link to="/property">Property</Link>
        </div>
    );
};

export default Sidebar;
