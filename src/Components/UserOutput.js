import React from 'react';
import './UserOutput.css'

function UserOutput(props) {

    return (
        <div className="Output">
            <p> {props.frase} </p>
            <p> I am {props.username} !</p>
        </div>
    );
};

export default UserOutput;