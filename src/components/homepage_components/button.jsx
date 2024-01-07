import React from 'react';

const HomeButton = ({ onClick, label, buttonBackground }) => {
    const buttonStyle = {
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: buttonBackground || '#3366ff', // Use the provided background color or default to #3366ff
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
        height: '15%',
        width: '70%',

    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

export default HomeButton;
