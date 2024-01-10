// CircleButtonWithImage.jsx

import React, { Component } from 'react';

class CircleButtonWithImage extends Component {
    render() {
        const { imagePath, onClick } = this.props;

        const buttonStyle = {
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            backgroundColor: '#ccc',
            // border: 'none',
            cursor: 'pointer',
            overflow: 'hidden',
            marginRight: '20px',
        };

        const imageStyle = {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        };

        return (
            <button style={buttonStyle} onClick={onClick}>
                <img src={imagePath} alt="Button" style={imageStyle} />
            </button>
        );
    }
}

export default CircleButtonWithImage;
