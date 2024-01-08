import React from "react";
import { RectCell, SquareCell } from "../components/ingame_components/BoardCell";

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
        price: ""
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
        price: "10% or 200",
    },
    {
        id: 5,
        name: "BIỂN NHA TRANG",
        price: 200,
        group: 8,
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
        price: ""
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
        price: ""
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
        price: ""
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
        price: ""
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
    },
    {
        id: 36,
        name: "CHANCE",
        price: ""
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
    },
    {
        id: 39,
        name: "LÀNG SEN QUÊ BÁC",
        price: 400,
        group: 7,
        color: "#5552FF"
    },
]

const InGame = () => {
    const screenHeight = Math.min(window.innerWidth, window.innerHeight);

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

    const boardGame = [<div><SquareCell width={cellHeight} bottom={boardBottomCoord} left={boardLeftCoord} /></div>, 
                        ...rectCellsLeft,
                        <div><SquareCell width={cellHeight} top={boardTopCoord} left={boardLeftCoord} /></div>,
                        ...rectCellsTop,
                        <div><SquareCell width={cellHeight} top={boardTopCoord} right={boardRightCoord} /></div>,
                        ...rectCellsRight,
                        <div><SquareCell width={cellHeight} bottom={boardBottomCoord} right={boardRightCoord} /></div>,
                        ...rectCellsBottom
                    ];

    return (
        <div>
            {boardGame}
        </div>
    );
};

export default InGame;