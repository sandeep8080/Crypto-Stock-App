import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import PageLayout from '../components/layout/Layout';
import HeroCard from '../components/card/Card';
import Fb from '../assets/FB.png';
import Ggl from '../assets/GOOGL.png';
import Amz from '../assets/AMZN.svg';
import DataTable from '../components/table/TableComp';
import rowData from '../mockData/mockRowData';

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



const HomePage = () => {
    const [rows, setRows] = useState(rowData);

    const getData = () => {
        const url = 'https://rest.coinapi.io/v1/assets';
        fetch(url, {
            method: 'GET',
            "headers": { 'X-CoinAPI-Key': '318E9D61-A457-40ED-BE5B-D48557C405A6' }
        }).then(response => response.json())
            .then(data => {
                setRows(data.slice(0, 10));
                console.log('Success:');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
       // getData();
    }, []);
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
                        btn='Save Data'
                        tableHeaderText='Asset Details Table'
                        searchBox={true} />
                </Container>
            </Row>
        </PageLayout>
    )
};

export default HomePage;
