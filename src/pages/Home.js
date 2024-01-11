import { Button, Typography, Container, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import CircleButtonWithImage from "../components/homepage_components/circle_button";
import RectangleComponent from "../components/homepage_components/ranking";
import HomeButton from "../components/homepage_components/button";
import ShopBox from "../components/homepage_components/shop_box";
import SkinBox from "../components/homepage_components/skin_box";
import React, { useState } from 'react';
import SoundComponent from "../components/homepage_components/sound";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
//////////////////////////////////////

const Home = ({ setAuth }) => {
  const dispatch = useDispatch()
  const theme = useTheme();
  const user = useSelector(state => state.user).user;

  const instructionPath = '/assets/homepage/instruction.png';
  const goldPath = '/assets/homepage/gold.png'
  const monopolyPath = '/assets/homepage/monopoly.png'

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/waitroom";

  const [isStartGameBox, setStartGameBox] = useState(false);
  const [isCreateRoomBox, setCreateRoomBox] = useState(false);
  const [closeButtonHover, setCloseButtonHover] = useState(false);
  const [joinButtonHover, setJoinButtonHover] = useState(false);
  const [isCreateShopBox, setCreateShopBox] = useState(false);

  const navigateToWaitingRoom = () => {
    console.log('Navigate to waiting room');
    setAuth(false);
    navigate(from, { replace: true });
    dispatch({ type: 'socket/connect' })
  }

  const showStartGameBox = () => {
    setStartGameBox(true);
    };

    const hideStartGameBox = () => {
        setStartGameBox(false);
        };
  
  const showCreateShopBox = () => {
    setCreateShopBox(true);
  };

  const hideCreateShopBox = () => {
    console.log("hide shop box");
    setCreateShopBox(false);
  };

  const showCreateRoomBox = () => {
    setCreateRoomBox(true);
  };

  const hideCreateRoomBox = () => {
    setCreateRoomBox(false);
  };

  const soundButtonClick = () => {
    // Handle button click event
    console.log('Sound clicked!');
  };

  const instructionButtonClick = () => {
    // Handle button click event
    console.log('Instruction clicked!');
    console.log(user);
  };

  const homeButtonClick = () => {
    // Handle button click event
    console.log('Home Button clicked!');
  };

  const screenContainerStyle = {
    backgroundColor: '#F2F2F2',
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: '0 auto', // Center the container horizontally
    width: '60%', // Take up 3/5 of the screen width
  };

  const div1Style = {
    display: 'flex',
    flexDirection: 'row',
    height: '20%',
    borderBottom: '1px solid #ccc',
  };

  const div1LeftStyle = {
    flex: 4,
    display: 'flex',
    alignItems: 'center',
  };

  const textWithPaddingStyle = {
    paddingLeft: '10px',
    fontWeight: 'bold',
  };

  const div1MiddleStyle = {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the content horizontally
  };

  const imageStyle = {
    width: '30%', // Set the width of the image to 50% of the container
    height: 'auto', // Maintain the aspect ratio
  };

  const div1RightStyle = {
    flex: 4,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  const div2Style = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  };

  const div2LeftStyle = {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  };

  const div2MiddleStyle = {
    flex: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the content horizontally
  };

  const monopolyStyle = {
    width: '100%', // Set the width of the image to 50% of the container
    height: 'auto', // Maintain the aspect ratio
    marginTop: '50px',
  }

  const div2RightStyle = {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  };

  const emptyBoxStyle = {
    height: '30px', // Set the height of the box
  };

  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        height: '70%',
        width: '70%',
        borderRadius: '10px',  
        border: '2px solid #000',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    };

    const boxIDStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f0f0f0',
        // padding: '5px',
        textAlign: 'center',
        height: '20%',
        width: '80%',
        borderRadius: '10px',  
        border: '2px solid #000', 
    };
    
    const titleStyle = {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#000000',
      margin: '-10px 0px',
    };

    const skinStyle = {
        position: 'absolute',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#000000',
        top: '-10%',
        transform: 'scale(0.6)',
        left: '80%',
      };

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
    };

    const closeButtonStyle = {
        padding: '10px 15px',
        backgroundColor: closeButtonHover ? '#ff0000' : '#ffa500',
        color: '#fff',
        borderColor: 'black',
        border: '',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '30%',
        transition: 'background-color 0.3s ease',
    };

    const joinButtonStyle = {
        padding: '10px 15px',
        backgroundColor: joinButtonHover ? '#3cb371' : '#66cdaa',
        color: '#fff',
        borderColor: 'black',
        border: '',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '30%',
        transition: 'background-color 0.3s ease',
    };
    
  return (
    <div style={screenContainerStyle}>
      <div style={containerStyle}>
        <div style={div1Style}>
          <div style={div1LeftStyle}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.name[0]} </Avatar>
            <p style={textWithPaddingStyle}>{user.username}</p>
          </div>

          <div style={div1MiddleStyle}>
            <img src={goldPath} alt="Description of the image" style={imageStyle} />
            <p style={textWithPaddingStyle}>20000</p>
          </div>

          <div style={div1RightStyle}>
            {/* <SoundComponent /> */}
            <CircleButtonWithImage imagePath={'/assets/homepage/nosound.png'} onClick={(soundButtonClick)} />
            <CircleButtonWithImage imagePath={instructionPath} onClick={instructionButtonClick} />
            <Button size="medium" variant="contained" style={{ backgroundColor: '#DC3D3D', color: 'white' }} onClick={() => setAuth(false)}>
              Log out
            </Button>
          </div>
        </div>

        <div style={div2Style}>
          <div style={div2LeftStyle}>
            <p style={{ fontSize: '30px', color: '#000000', fontWeight: 'bold' }}>
              Top Players
            </p>
            <RectangleComponent textContent={"Tran Tuan Viet"} imagePath={'/assets/homepage/top1.png'} />
            <div style={emptyBoxStyle}></div>
            <RectangleComponent textContent={"Nguyen Dinh Tung"} imagePath={'/assets/homepage/top2.png'} />
            <div style={emptyBoxStyle}></div>
            <RectangleComponent textContent={"Hoang Nghia Viet"} imagePath={'/assets/homepage/top3.png'} />
          </div>
          <div style={div2MiddleStyle}>
            <img src={monopolyPath} alt="Description of the image" style={monopolyStyle} />
          </div>
          <div style={div2RightStyle}>
            <HomeButton onClick={navigateToWaitingRoom} label = 'Create New Game' buttonBackground='#E3A053' />
            <div style={emptyBoxStyle}></div>
            <HomeButton onClick={showCreateRoomBox} label='Join Game' buttonBackground='#72B174' />
            <div style={emptyBoxStyle}></div>
            <HomeButton onClick={showCreateShopBox} label='Shop' buttonBackground='#B969C6' />

            {isStartGameBox && (
              <div style={boxStyle}>
                <p style={titleStyle}>Create New Table</p>
                <SkinBox name = {'My Skin'} color = 'grey' style = {skinStyle} skinUrl = {'assets/waitroom/skin1.png'} buyNotAppear={true}/>

                <label >
                    <input name="myInput" style={{...boxIDStyle, ...titleStyle}}/>
                </label>
                <div style = {rowStyle}>
                    <button  onClick={navigateToWaitingRoom} style = {joinButtonStyle} onMouseEnter={() => setJoinButtonHover(true)}
      onMouseLeave={() => setJoinButtonHover(false)}>Join Room</button>
                    <button  onClick={hideStartGameBox} style = {closeButtonStyle} onMouseEnter={() => setCloseButtonHover(true)}
      onMouseLeave={() => setCloseButtonHover(false)}>Close Box</button>
                </div>
              </div>
            )}


            {isCreateRoomBox && (
              <div style={boxStyle}>
                <p style={titleStyle}>Choose Table</p>
                <SkinBox name = {'My Skin'} color = 'grey' style = {skinStyle} skinUrl = {'assets/waitroom/skin1.png'} buyNotAppear={true}/>

                <label >
                    <input name="myInput" style={{...boxIDStyle, ...titleStyle}}/>
                </label>
                <div style = {rowStyle}>
                    <button  onClick={navigateToWaitingRoom} style = {joinButtonStyle} onMouseEnter={() => setJoinButtonHover(true)}
      onMouseLeave={() => setJoinButtonHover(false)}>Join Room</button>
                    <button  onClick={hideCreateRoomBox} style = {closeButtonStyle} onMouseEnter={() => setCloseButtonHover(true)}
      onMouseLeave={() => setCloseButtonHover(false)}>Close Box</button>
                </div>
              </div>
            )}
            
            {isCreateShopBox && (
              <ShopBox hideCreateShopBox={hideCreateShopBox}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// const comp = () => (
//   <motion.span
//     variants={stagger}
//     initial="initial"
//     animate="animate"
//     style={{
//       textAlign: "center",
//       marginTop: 4,
//       padding: 4,
//       fontSize: "8rem",
//       fontWeight: 500,
//       position: "relative",
//       letterSpacing: "-0.8rem",
//       display: "inline-block",
//       whiteSpace: "nowrap",
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "4rem",
//         letterSpacing: "-0.4rem",
//         paddin: 0,
//       },
//     }}
//   >
//     {[..."Welcome Back"].map((l, i) => (
//       <motion.span variants={animation} key={i}>
//         {l}
//       </motion.span>
//     ))}
//   </motion.span>
// );
export default Home;
