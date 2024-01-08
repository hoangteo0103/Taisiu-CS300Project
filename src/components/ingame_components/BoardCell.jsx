import React from 'react';

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
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        padding: '2px', 
        flex: '1'
    };

    return (
    <div style={rectStyle}>
        {content.color && <div style={coloredDivStyle}></div>}
        <div sytle={contentBoxStyle}>
            <p style={{ fontSize: '30%', fontWeight: 'bold', textAlign: 'center' }}>{content.name}</p>
            {content.image && <image ></image>}
            <p style={{ fontSize: '30%', fontWeight: 'bold', textAlign: 'center' }}>PRICE {content.price}</p>
        </div>
    </div>
    );
};

const SquareCell = ({ width, top, bottom, left, right, rotate, origin }) => {
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
  
    return <div style={rectStyle}></div>;
};

export {RectCell, SquareCell};