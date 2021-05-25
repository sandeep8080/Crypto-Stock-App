import React from 'react';

import Card from 'react-bootstrap/Card';

const HeroCard = ({ cTitle, price, image }) => {
    return (
        <Card className='mt-3' style={{ width: '309px', height: '195px',backgroundColor:'rgba(0, 0, 0, 0.03)'}}>
            <Card.Body className='d-flex justify-content-between border-bottom-0' >
                <Card.Title>{cTitle}</Card.Title>
                <Card.Img src={image} style={{ width: '60px' }} />
            </Card.Body>
            <Card.Body style={{ fontSize: "35px" }} className='text-center font-weight-bold pt-0'>
                {price} USD
            </Card.Body>
        </Card>
    )
};

export default HeroCard;