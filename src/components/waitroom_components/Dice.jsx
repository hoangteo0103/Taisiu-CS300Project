import React from "react";
const Dice = ({diceColor}) => {
    const diceStyle = {
        width: '40px',
        height: '40px',
        backgroundColor: diceColor || 'white',
        border: '2px solid black', // Thêm đường viền đen
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const dotStyle = {
        width: '10px',
        height: '10px',
        backgroundColor: 'black',
        borderRadius: '50%',
    }
    return (
        <div style = {diceStyle}>
            <div style = {dotStyle}></div>
        </div>
    )
}

export default Dice;