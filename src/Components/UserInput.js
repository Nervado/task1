import React from 'react';

import './UserInput.css'

function UserInput(props) {

    const style = {
        textAlign: 'center',
        height: '100%',
        width: '100%',
        border: '1px solid  yellowgreen',
    }

    return (
        <div className="Input" >
            <input
                style={style}
                value={props.username}
                type="text"
                onChange={props.changed} />
        </div>
    );
};

export default UserInput;