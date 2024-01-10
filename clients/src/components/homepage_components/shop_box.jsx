import React, {useEffect} from 'react';
import { useState } from 'react';
import {Avatar} from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import Dice from "../waitroom_components/Dice";
import SkinBox from "../homepage_components/skin_box";
class SkinBoxClass {
    constructor (name, color, skinUrl, avatarColor){
        this.name = name;
        this.color = color;
        this.skinUrl = skinUrl;
        this.avatarColor = avatarColor;
    }
}
const ShopBox = ({hideCreateShopBox}) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [numPage, setNumPage] = React.useState(3); 
    const [closeButtonHover, setCloseButtonHover] = React.useState(false);
    const [leftButtonHover, setLeftButtonHover] = React.useState(false);
    const [rightButtonHover, setRightButtonHover] = React.useState(false);

    
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Đặt màu nền là trong suốt
        border: 'none', // Xóa viền
        padding: '5px',
        cursor: 'pointer',
      };


    const boxStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: '#f0f0f0',
        // textAlign: 'center',
        height: '70%',
        width: '70%',
        borderRadius: '10px',  
        border: '2px solid #000',  

        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        alignItems: 'center',

        overflowX: 'auto',
    }

    const titleStyle = {
        flex: '1',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#000000',
        // overflowX: 'auto',
        // margin: '30px 0px',
    };

    const rowStyle = {
        flex: '10',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    };

    const leftButtonStyle = {
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        border: (leftButtonHover) ? '2px solid #000' : 'None',
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
    }

    const rightButtonStyle = {
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        border: (rightButtonHover) ? '2px solid #000' : 'None',
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
    }

    const closeButtonStyle = {
        marginBottom: '10px',
        flex: '0.6',
        padding: '10px 15px',
        fontSize: '20px',
        backgroundColor: closeButtonHover ? '#ff0000' : '#ffa500',
        color: '#fff',
        borderColor: 'black',
        border: '',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '20%',
        transition: 'background-color 0.3s ease',
    }



    let SkinBoxListOnePage = [];
    let SkinBoxList = [];

    for (let i = 1; i <= 15; i++){
        SkinBoxListOnePage.push(new SkinBoxClass(
            "Skin " + i,
             "red",
            `assets/waitroom/skin${i}.png`,
             deepOrange[500]
        ));
        if (i % 5 == 0){
            SkinBoxList.push(SkinBoxListOnePage);
            SkinBoxListOnePage = [];
        }
    }

    const countSkin = () => {
        let numSkin = 0;
        for (let i = 0; i < SkinBoxList.length; i++){
            numSkin += SkinBoxList[i].length;
        }
        return numSkin;
    }

    const buySkin = ({deleteIndex}) => {
        let numSkin = countSkin();
        let tmpList = [];
        for (let i = 0; i < SkinBoxList.length; i++){
            for (let j = 0; j < SkinBoxList[i].length; j++){
                tmpList.push(SkinBoxList[i][j]);
            }
        }
        tmpList.splice(deleteIndex, 1);
        console.log(tmpList);
        SkinBoxList = [];
        SkinBoxListOnePage = [];
        for (let i = 0; i < tmpList.length; i++){
            SkinBoxListOnePage.push(tmpList[i]);
            if (i % 5 == 4 || i == tmpList.length - 1){
                SkinBoxList.push(SkinBoxListOnePage);
                SkinBoxListOnePage = [];
            }
        }
        //setCurrentPage(Math.min(currentPage, SkinBoxList.length - 1));

        console.log(SkinBoxList);   
    }

    function increaseCurrentPage() {
        console.log('before: ' + currentPage);
        setCurrentPage((prevPage) => (prevPage + 1) % 3);
    }
    
    useEffect(() => {
        console.log('after: ' + currentPage);
    }, [currentPage]); 

    useEffect(() => {
        console.log('after box list: ' + SkinBoxList);
    }, [SkinBoxList]); 
    
    
    const decreaseCurrentPage = () => {
        setCurrentPage((currentPage + 2) % 3);
        console.log('current page: ' + currentPage);
    }
    
  return (
    <div style = {boxStyle}>
        <div style = {titleStyle}>Shop</div>

        <div style = {rowStyle}>
            <img style={leftButtonStyle}
                src= {'assets/homepage/left_button.png'}
                onClick = {decreaseCurrentPage}
                onMouseEnter = {() => setLeftButtonHover(true)} onMouseLeave = {() => setLeftButtonHover(false)}
            >
            </img>
            {SkinBoxList[currentPage].map((skinBox, index) => (
                <SkinBox key = {index} {...skinBox}  buySkin={() => buySkin({ deleteIndex: index })}/>
            ))}
            <img style={rightButtonStyle}
                src= {'assets/homepage/right_button.png'}
                onClick = {increaseCurrentPage}
                onMouseEnter = {() => setRightButtonHover(true)} onMouseLeave = {() => setRightButtonHover(false)}
            >
            </img>
            {/* <SkinBox style = {skinBoxStyle}name = "Skin 1" color = "red" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            {/* <SkinBox style = {skinBoxStyle}name = "Skin 2" color = "blue" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/> */}
            {/* <SkinBox name = "Skin 3" color = "green" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 4" color = "yellow" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 1" color = "red" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 2" color = "blue" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 3" color = "green" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 4" color = "yellow" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 1" color = "red" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 2" color = "blue" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 3" color = "green" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/>
            <SkinBox name = "Skin 4" color = "yellow" skinUrl = "https://i.imgur.com/5bZv2qf.png" avatarColor = {deepOrange[500]}/> */}
        </div>

        <button onClick = {hideCreateShopBox} style = {closeButtonStyle} onMouseEnter = {() => setCloseButtonHover(true)} onMouseLeave = {() => setCloseButtonHover(false)}>
            Close
        </button>
    </div>
  );
}

export default ShopBox;
