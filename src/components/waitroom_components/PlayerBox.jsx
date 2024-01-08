import React from 'react';
import {Avatar} from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import Dice from "../waitroom_components/Dice";
const PlayerBox = ({ name , color, skinUrl, avatarColor}) => {
  const boxStyle = {
    width: '15%',
    height: '40vh',
    background: '#ffe4b5',
    border: '2px solid black', // Thêm đường viền đen
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'white',
    position: 'relative',
  };
  const rowStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    borderBottom: '2px dashed black',
  };
  const nameBox = {
    background: 'red',
    width: '80%',
    marginLeft: '5%',
    height: '50%', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '1px solid black', // Thêm đường viền đen
    // borderRadius: '12px',
  }
  const avatarStyle = {
    backgroundColor: avatarColor || deepOrange[500],
  };
  const skinStyle = {
    flex: 3,
    width: '100%',
}
    const diceStyle = {
        position: 'absolute',
        right: '0',
        bottom: '0',
        // transformOrigin: '95% 150%',
    }
  

  return (
    <div style={boxStyle}>
      <div style={rowStyle}>
        <Avatar sx = {avatarStyle}>{name[0]}</Avatar>
        <div style={nameBox}>{name}</div>
      </div>
      <img src={skinUrl} alt={`Avatar of ${name}`} style={skinStyle} />
      <div style = {diceStyle}>
        <Dice diceColor={color} />
      </div>
    </div>
  );
}

export default PlayerBox;
