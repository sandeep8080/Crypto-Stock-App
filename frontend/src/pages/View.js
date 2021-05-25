import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Buttom from 'react-bootstrap/Button';

import PageLayout from '../components/layout/Layout';
import HeroCard from '../components/card/Card';
import Fb from '../assets/FB.png';
import Ggl from '../assets/GOOGL.png';
import Amz from '../assets/AMZN.svg';
import DataTable from '../components/table/TableComp';

const columns = [{
    key: 'name',
    value: 'Asset Name'
}, {
    key: 'asset_id',
    value: 'Asset Symbol'
}, {
    key: '',
    value: ''
}, {
    key: 'price_usd',
    value: 'Asset Price (USD)'
}];

const ViewPage = () => {
    const history = useHistory();
    const [rows, setRows] = useState([]);

    const getSavedData = () => {
        fetch('http://localhost:5000/getData', {
            method: 'GET',
            "crossDomain": true,
            "headers": { "content-type": "application/json" }
        }).then(resp => resp.json())
            .then(data => {
                setRows(data.data);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        getSavedData();
    }, [])

    return (
        <PageLayout>
            <Row>
                <Container className='d-flex justify-content-between'>
                    <HeroCard cTitle='GOOGLE' price='1515' image={Ggl} />
                    <HeroCard cTitle='FB' price='266' image={Fb} />
                    <HeroCard cTitle='AMAZON' price='3116' image={Amz} />
                </Container>
            </Row>
            <Row className='justify-content-center mt-3'>
                <Container className='mt-4'>
                    <DataTable
                        rows={rows}
                        columns={columns}
                        btn='Delete'
                        tableHeaderText='Saved Data Table'
                        searchBox={false}
                    />
                    <Row className='justify-content-center mt-1'>
                        <Buttom 
                        onClick={()=>history.push('/')}
                        >
                            Return</Buttom>
                    </Row>
                </Container>
            </Row>
        </PageLayout>
    )
};

export default ViewPage;
