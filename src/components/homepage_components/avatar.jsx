// Avatar.jsx

import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.imagePath = props.imagePath;
        console.log(this.imagePath)
    }

    render() {
        const avatarStyle = {
            width: '10px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: '50px',
        };

        const avatarImageStyle = {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        };

        return (
            <div style={avatarStyle}>
                <img
                    src={this.imagePath}
                    alt="User's Avatar"
                    style={avatarImageStyle}
                />
            </div>
        );
    }
}

export default Avatar;
