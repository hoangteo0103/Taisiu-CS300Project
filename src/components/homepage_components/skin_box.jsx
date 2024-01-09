import React from 'react';
import {Avatar} from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
const SkinBox = ({name , color, skinUrl, avatarColor}) => {
    const [buyButtonHover, setBuyButtonHover] = React.useState(false);
    const boxStyle = {
        width: '15%',
        height: '40vh',
        background: '#ffe4b5',
        border: '2px solid black', // Thêm đường viền đen
        // borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        color: 'white',
        position: 'relative',
    };
    const nameBox = {
        flex: '1',
        background: 'green',
        width: '100%',
        height: '20%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',

        // border: '2px solid black', // Thêm đường viền đen
        // borderRadius: '10px',
    }

    const skinStyle = {
        flex: '10',
        width: '100%',
    }
    const buyButtonStyle = {
        flex: '1',
        padding: '10px 15px',
        fontSize: '15px',
        backgroundColor: buyButtonHover ? '#ff0000' : '#ffa500',
        color: '#fff',
        // borderColor: 'black',
        // border: '',
        // borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    }
  

  return (
        <div style={boxStyle}>
            <div style={nameBox}>
                <p>{name}</p>
            </div>
            <img src={skinUrl} alt={`Avatar of ${name}`} style={skinStyle} />
            <button style = {buyButtonStyle} onMouseEnter = {() => setBuyButtonHover(true)} onMouseLeave = {() => setBuyButtonHover(false)}>
                Buy
            </button>
        </div>
  );
}

export default SkinBox;
