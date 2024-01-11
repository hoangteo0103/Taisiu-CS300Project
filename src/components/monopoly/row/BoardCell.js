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

const BoardGame = ({boardData}) => {
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