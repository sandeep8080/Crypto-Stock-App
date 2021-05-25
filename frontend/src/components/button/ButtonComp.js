import React from 'react';

import Button from 'react-bootstrap/Button';

const ButtonComp = ({ text, handleBtnClick }) => {
    return (
        <Button onClick={handleBtnClick}>
            {text}
        </Button>
    )
};

export default ButtonComp;