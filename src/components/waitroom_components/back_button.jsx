import React, { useState } from 'react';
const BackButton = ({navigateToHome, style}) => {
    const [backButtonHover, setBackButtonHover] = useState(false);

    const buttonStyle = { // Thay đổi đường dẫn của hình ảnh
        backgroundColor: backButtonHover ? '#ff0000' : '#ff6347',
        color: '#fff',
        borderColor: 'black',
        border: '',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '100px',
        height: '50px',
        transition: 'background-color 0.3s ease',
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
    }
    return (
        <div style = {style}>
            <button style={buttonStyle} onClick={navigateToHome} onMouseEnter={() => setBackButtonHover(true)}
            onMouseLeave={() => setBackButtonHover(false)}>
                Back
            </button>
        </div>
    );
}

export default BackButton;