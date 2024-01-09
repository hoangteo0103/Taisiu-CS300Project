import React, { useEffect, useState } from 'react';

const RectCell = ({ content, width, height, top, bottom, left, right, rotate, origin }) => {
    const rectStyle = {
        width: `${width}px`,
        height: `${height}px`,
        borderLeft: '1px solid black',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        position: 'absolute',
        top: `${top}px`,
        bottom: `${bottom}px`,
        left: `${left}px`,
        right: `${right}px`,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: origin,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const coloredDivStyle = {
        width: '100%',
        height: '15%',
        borderBottom: '1px solid black',
        backgroundColor: content.color || 'transparent'
    };

    const contentBoxStyle = {
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2px',
        flex: '1'
    };

    return (
    <div style={rectStyle}>
        {content.color && <div style={coloredDivStyle}></div>}
        <div style={contentBoxStyle}>
            <p style={{ fontSize: '30%', fontWeight: '700', textAlign: 'center' }}>{content.name}</p>
            {content.image && <img style={{ width: '60%', transform: 'rotate(270deg)' }} src={process.env.PUBLIC_URL + content.image}></img>}
            <p style={{ fontSize: '30%', fontWeight: '700', textAlign: 'center' }}>PRICE {content.price}</p>
        </div>
    </div>
    );
};

const SquareCell = ({ image, width, top, bottom, left, right, rotate, origin }) => {
    const rectStyle = {
        width: `${width}px`,
        height: `${width}px`,
        border: '2px solid black',
        position: 'absolute',
        top: `${top}px`,
        bottom: `${bottom}px`,
        left: `${left}px`,
        right: `${right}px`,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: origin,
    };
  
    return <div style={rectStyle}>
        {image && <img style={{ width: '100%' }} src={process.env.PUBLIC_URL + image}></img>}
    </div>;
};

const boardData = [
    {
        id: 0,
        name: "START",
    },
    {
        id: 1,
        name: "HÀ GIANG",
        price: 60,
        group: 0,
        color: "#C8BAFF"
    },
    {
        id: 2,
        name: "FORTUNE",
        price: "",
        image: "/assets/ingamepage/fortune.png"
    },
    {
        id: 3,
        name: "MỘC CHÂU",
        price: 60,
        group: 0,
        color: "#C8BAFF"
    },
    {
        id: 4,
        name: "THUẾ",
        price: "10% OR 200",
        image: "/assets/ingamepage/tax.png"
    },
    {
        id: 5,
        name: "BIỂN NHA TRANG",
        price: 200,
        group: 8,
        image: "/assets/ingamepage/beach1.png"
    },
    {
        id: 6,
        name: "PHONG NHA KẺ BÀNG",
        price: 100,
        group: 1,
        color: "#699CF8"
    },
    {
        id: 7,
        name: "CHANCE",
        price: "",
        image: "/assets/ingamepage/chance.png"
    },
    {
        id: 8,
        name: "SAPA",
        price: 100,
        group: 1,
        color: "#699CF8"
    },
    {
        id: 9,
        name: "VỊNH HẠ LONG",
        price: 120,
        group: 1,
        color: "#699CF8"
    },

    {
        id: 10,
        name: "IN JAIL"
    },
    {
        id: 11,
        name: "ĐÀ LẠT",
        price: 140,
        group: 2,
        color: "#FF8678"
    },
    {
        id: 12,
        name: "THỦY ĐIỆN HÒA BÌNH",
        price: 150,
        group: 9,
        image: "/assets/ingamepage/company1.png"
    },
    {
        id: 13,
        name: "NHA TRANG",
        price: 140,
        group: 2,
        color: "#FF8678"
    },
    {
        id: 14,
        name: "VŨNG TÀU",
        price: 160,
        group: 2,
        color: "#FF8678"
    },
    {
        id: 15,
        name: "BIỂN VŨNG TÀU",
        price: 200,
        group: 8,
        image: "/assets/ingamepage/beach2.png"
    },
    {
        id: 16,
        name: "BẾN NHÀ RỒNG",
        price: 180,
        group: 3,
        color: "#A25AFF"
    },
    {
        id: 17,
        name: "DINH ĐỘC LẬP",
        price: 180,
        group: 3,
        color: "#A25AFF"
    },
    {
        id: 18,
        name: "FORTUNE",
        price: "",
        image: "/assets/ingamepage/fortune.png"
    },
    {
        id: 19,
        name: "CHỢ BẾN THÀNH",
        price: 200,
        group: 3,
        color: "#A25AFF"
    },

    {
        id: 20,
        name: "FESTIVAL"
    },
    {
        id: 21,
        name: "LĂNG BÁC",
        price: 220,
        group: 4,
        color: "#F44E1F"
    },
    {
        id: 22,
        name: "CHANCE",
        price: "",
        image: "/assets/ingamepage/chance.png"
    },
    {
        id: 23,
        name: "VĂN MIẾU QUỐC TỬ GIÁM",
        price: 220,
        group: 4,
        color: "#F44E1F"
    },
    {
        id: 24,
        name: "HỒ HOÀN KIẾM",
        price: 240,
        group: 4,
        color: "#F44E1F"
    },
    {
        id: 25,
        name: "BIỂN MỸ KHÊ",
        price: 200,
        group: 8,
        image: "/assets/ingamepage/beach3.png"
    },
    {
        id: 26,
        name: "KINH THÀNH HUẾ",
        price: 260,
        group: 5,
        color: "#FFC700"
    },
    {
        id: 27,
        name: "CHÙA THIÊN MỤ",
        price: 260,
        group: 5,
        color: "#FFC700"
    },
    {
        id: 28,
        name: "THỦY ĐIỆN SƠN LA",
        price: 150,
        group: 9,
        image: "/assets/ingamepage/company2.png"
    },
    {
        id: 29,
        name: "SÔNG HƯƠNG",
        price: 280,
        group: 5,
        color: "#FFC700"
    },

    
    {
        id: 30,
        name: "TAN SON NHAT",
    },
    {
        id: 31,
        name: "BÀ NÀ HILLS",
        price: 300,
        group: 6,
        color: "#0FAA58"
    },
    {
        id: 32,
        name: "PHỐ CỔ HỘI AN",
        price: 300,
        group: 6,
        color: "#0FAA58"
    },
    {
        id: 33,
        name: "FORTUNE",
        price: "",
        image: "/assets/ingamepage/fortune.png"
    },
    {
        id: 34,
        name: "CẦU RỒNG",
        price: 320,
        group: 6,
        color: "#0FAA58"
    },
    {
        id: 35,
        name: "BIỂN CỬA LÒ",
        price: 200,
        group: 8,
        image: "/assets/ingamepage/beach4.png"
    },
    {
        id: 36,
        name: "CHANCE",
        price: "",
        image: "/assets/ingamepage/chance.png"
    },
    {
        id: 37,
        name: "THÀNH CỔ NGHỆ AN",
        price: 350,
        group: 7,
        color: "#5552FF"
    },
    {
        id: 38,
        name: "THUẾ",
        price: 75,
        image: "/assets/ingamepage/tax.png"
    },
    {
        id: 39,
        name: "LÀNG SEN QUÊ BÁC",
        price: 400,
        group: 7,
        color: "#5552FF"
    },
]

const BoardGame = () => {
    const [boardSize, setBoardSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
          setBoardSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const screenHeight = Math.min(boardSize.width, boardSize.height);

    const cellWidth = Math.floor(screenHeight / 13);
    const cellHeight = cellWidth * 2;

    const totalWidth = 13 * cellWidth;
    const boardLeftCoord = Math.floor((window.innerWidth - totalWidth) / 2);
    const boardRightCoord = window.innerWidth - (boardLeftCoord + totalWidth);
    const boardTopCoord = Math.floor((window.innerHeight - totalWidth) / 2);
    const boardBottomCoord = window.innerHeight - (boardTopCoord + totalWidth);

    const rectCellsLeft = Array.from({ length: 9 }, (_, index) => (
        <RectCell content={boardData[index + 1]} width={cellWidth} height={cellHeight} bottom={boardBottomCoord + (index + 2) * cellWidth} left={boardLeftCoord} rotate={270} origin={'right'} />
    ));

    const rectCellsTop = Array.from({ length: 9 }, (_, index) => (
        <RectCell content={boardData[index + 11]} width={cellWidth} height={cellHeight} top={boardTopCoord} left={boardLeftCoord + (index + 2) * cellWidth} />
    ));

    const rectCellsRight = Array.from({ length: 9 }, (_, index) => (
        <RectCell content={boardData[index + 21]} width={cellWidth} height={cellHeight} top={boardTopCoord + (index + 2) * cellWidth} right={boardRightCoord} rotate={270} origin={'left'} />
    ));

    const rectCellsBottom = Array.from({ length: 9 }, (_, index) => (
        <RectCell content={boardData[index + 31]} width={cellWidth} height={cellHeight} bottom={boardBottomCoord} right={boardRightCoord + (index + 2) * cellWidth} />
    ));

    const boardGame = [<div><SquareCell image={"/assets/ingamepage/corner1.png"} width={cellHeight} bottom={boardBottomCoord} left={boardLeftCoord} /></div>, 
                        ...rectCellsLeft,
                        <div><SquareCell image={"/assets/ingamepage/corner2.png"} width={cellHeight} top={boardTopCoord} left={boardLeftCoord} /></div>,
                        ...rectCellsTop,
                        <div><SquareCell image={"/assets/ingamepage/corner3.png"} width={cellHeight} top={boardTopCoord} right={boardRightCoord} /></div>,
                        ...rectCellsRight,
                        <div><SquareCell image={"/assets/ingamepage/corner4.png"} width={cellHeight} bottom={boardBottomCoord} right={boardRightCoord} /></div>,
                        ...rectCellsBottom
                    ];

    return (
        <div>
            {boardGame}
        </div>
    );
};

export {RectCell, SquareCell, BoardGame};