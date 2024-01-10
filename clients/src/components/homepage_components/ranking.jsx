// RectangleComponent.jsx

import React from 'react';

const RectangleComponent = ({ imagePath, textContent }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '70%', // Set the width of the rectangle
        height: '50px', // Set the height of the rectangle
        borderRadius: '20px',
        backgroundColor: '#292E37',
    };

    const part1Style = {
        flex: '2', // 1/6 of the rectangle's height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const part2Style = {
        flex: '5', // 5/6 of the rectangle's height
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        color: '#FFFFFF', // Text color
        fontWeight: 'bold',
    };

    const imageStyle = {
        width: '50%', // Adjust the width of the image as needed
        height: 'auto',
    };

    return (
        <div style={containerStyle}>
            <div style={part1Style}>
                <img src={imagePath} alt="Description" style={imageStyle} />
            </div>
            <div style={part2Style}>
                <p>{textContent}</p>
            </div>
        </div>
    );
};

export default RectangleComponent;
