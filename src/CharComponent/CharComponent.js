import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    let charsArray = props.characters.split('')

    // console.log(charsArray);
    return (
        <div className="keyMap">
            {
                charsArray.map(char => {
                return <p onClick={props.click}>{char}</p>;
                })
            }
        </div>
    );
}

export default charComponent;