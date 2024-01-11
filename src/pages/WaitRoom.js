import React, { useState,useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import PlayerBox from "../components/waitroom_components/PlayerBox";
import BackButton from "../components/waitroom_components/back_button";
import { use } from 'passport';


let numPlayer = 4;
class Player {
    constructor(name, color, skinUrl, avatarColor) {
      this.name = name;
      this.color = color;
      this.skinUrl = skinUrl;
      this.avatarColor = avatarColor;
    }
}

const RootStyle = styled("div")({
  background: "#f2f2f2",
  height: "100vh",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  flex: "1",
//   alignItems: "center",
});

const DivHeadingStyle = styled("div")({
    flex: '1',
    alignItems: "center",
    alignSelf: "center",
    position: "relative",
    textAlign: "center",
});



const HeadingStyle = styled("div")({
    fontSize: "30px",
    fontWeight: "bold",
    color: "black",
    // margin: "5px 0px",
    // alignSelf: "center",
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});

const RoomIDTitleStyle = styled("div")({
    fontSize: "20px",
    fontWeight: "bold",
    position: "absolute",
    top: "30%",
    left: "60vh",
    transform: "translate(0%, 0%)",
  });

  const RoomIDNumberStyle = styled("div")({
    fontSize: "20px",
    position: "absolute",
    top: "30%",
    left: "73vh",
    //transform: "translate(-50%, -50%)",
  });

  const BackButtonStyle = {
    position: "absolute",
    top: "20%",
    left: "-90vh",
  }
    //transform: "translate(-50%, -50%)",);


const PlayerBoxContainer = styled("div")({
    flex: '4',
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "flex-end",
});

const players = [];
for (let i = 0; i < numPlayer; i++) {
    players.push(new Player("Tung", "red", "assets/waitroom/skin1.png", "green"));
}

const WaitRoom = ({ setAuth }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user).user;
    const socket = useSelector(state => state.socket.socket);
    const [gameId, setGameId] = useState("");
  

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/monopoly";
    const backToHome = location.state?.from?.pathname ||"/";
    const [playButtonHover, setPlayButtonHover] = useState(false);

    const navigateToGameRoom = () => {
        console.log('Navigate to waiting room');
        setAuth(false);
        navigate(from, { replace: true });
      }

    const navigateToHome = () => {
        console.log('Navigate to home');
        setAuth(true);
        navigate(backToHome, { replace: true });
        }

    const divPlayButtonStyle = {
        alignSelf: 'center',
        width: '40%',
        // padding: '20% 0',
        flex: '1',
        position: 'relative',
    };

    const playButtonStyle = {
        backgroundColor: playButtonHover ? '#3cb371' : '#66cdaa',
        color: '#fff',
        borderColor: 'black',
        border: '',
        borderRadius: '10px',
        cursor: 'pointer',
        height: '30%',
        width: '100%',
        transition: 'background-color 0.3s ease',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    useEffect(() => {
        dispatch({ type: 'socket/create_new_game' , payload: {username: user.username} })
        
        socket.on('gameCreated', (data) => {
            console.log('gameCreated', data);
            setGameId(data.gameId);
        })
        return () => {
            dispatch({ type: 'socket/disconnect' })
          }      
    }, []);

    return (
        <RootStyle>
                <DivHeadingStyle>
                    <BackButton style = {BackButtonStyle} navigateToHome={navigateToHome}/>
                    <HeadingStyle>
                        RESTROOM
                    </HeadingStyle>
                    <RoomIDTitleStyle>
                        RoomID:
                    </RoomIDTitleStyle>
                    <RoomIDNumberStyle>
                        {gameId}
                    </RoomIDNumberStyle>
                </DivHeadingStyle>
            <PlayerBoxContainer>
                {players.map((player, index) => (
                    <PlayerBox key={index} {...player} />
                ))}
            </PlayerBoxContainer>
            <div style = {divPlayButtonStyle}>
                <button  onClick={navigateToGameRoom} style = {playButtonStyle} onMouseEnter={() => setPlayButtonHover(true)}
        onMouseLeave={() => setPlayButtonHover(false)}>Play Game</button>
            </div>
        </RootStyle>

        
    );
};

export default WaitRoom;
