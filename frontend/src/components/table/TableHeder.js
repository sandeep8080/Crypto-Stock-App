import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const TableHeader = ({ headerText, isSearch = false }) => {
    return (
        <Navbar>
            <Navbar.Brand>
                {headerText}
            </Navbar.Brand>
            {isSearch && <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search By Asset Name"
                    className="mr-1"
                    aria-label="Search"
                />
            </Form>}
        </Navbar>
    )
};

export default TableHeader;