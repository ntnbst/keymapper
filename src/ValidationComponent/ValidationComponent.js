import React from 'react';

const validationComponent = (props) => {
    let displayMessage = null;

    if (props.length <= 8) {
        displayMessage = <h4 style={ {color: 'red'} }>!!! Text Too Short</h4>;
    } else {
        displayMessage = <h4 style={ {color: 'green'} }>Text Long Enough</h4>;
    }
    return displayMessage ;
}

export default validationComponent;