import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

const PageHeader = () => {
    return (
        <Navbar style={{backgroundColor:'rgba(3, 28, 71, 0.8)'}} >
            <Navbar.Brand href='/'>
                <img
                    alt="Home"
                    src="https://www.quikieapps.com/wp-content/uploads/2018/10/QuikieAppsLogoResized-01.png.webp"
                    width="85"
                    height="40"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
        </Navbar>
    )
};

export default PageHeader;