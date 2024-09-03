// src/components/AddPropertyModal.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating random IDs

const AddPropertyModal = ({ onClose, addProperty }) => {
    const [propertyName, setPropertyName] = useState('');
    const [location, setLocation] = useState('');
    const [pricePerSquareMeter, setPricePerSquareMeter] = useState('');
    const [squareMeters, setSquareMeters] = useState(''); // New state for square meters

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProperty = {
            id: uuidv4(), // Generate a unique ID
            propertyName,
            location,
            pricePerSquareMeter: parseFloat(pricePerSquareMeter),
            squareMeters: parseInt(squareMeters), // Store number of square meters
        };

        addProperty(newProperty); // Add the new property to the state
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
                        Property Name:
                        <input
                            type="text"
                            value={propertyName}
                            onChange={(e) => setPropertyName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Price per Square Meter:
                        <input
                            type="number"
                            step="0.01"
                            value={pricePerSquareMeter}
                            onChange={(e) => setPricePerSquareMeter(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Square Meters Owned:
                        <input
                            type="number"
                            value={squareMeters}
                            onChange={(e) => setSquareMeters(e.target.value)}
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

export default AddPropertyModal;
