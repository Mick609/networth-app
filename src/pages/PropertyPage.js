import React, { useState, useEffect } from 'react';
import AddPropertyModal from '../components/AddPropertyModal';

const PropertyPage = () => {
    const [properties, setProperties] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    // Retrieve properties from localStorage when component mounts
    useEffect(() => {
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
        setProperties(storedProperties);
    }, []);

    // Save properties to localStorage whenever properties state changes
    useEffect(() => {
        localStorage.setItem('properties', JSON.stringify(properties));
    }, [properties]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const addProperty = (newProperty) => {
        setProperties([...properties, newProperty]);
    };

    return (
        <div>
            <h1>Property</h1>
            <button onClick={handleOpenModal}>Add Property</button>
            {isModalOpen && <AddPropertyModal onClose={handleCloseModal} addProperty={addProperty} />}
            <ul>
                {properties.map((property, index) => (
                    <li key={index}>
                        {property.propertyName} - {property.location} - {property.squareMeters} sqm
                        <br />
                        Price per Square Meter: ${property.pricePerSquareMeter.toFixed(2)}
                        <br />
                        Total Price: ${(property.squareMeters * property.pricePerSquareMeter).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyPage;
