import React from 'react';

import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeder';
import TableRow from './TableRow';

const DataTable = ({ rows = [], columns = [], btn, tableHeaderText = "", searchBox }) => {
    return (
        <>
            <TableHeader headerText={tableHeaderText} isSearch={searchBox} />
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        {columns.map((colObj, index) =>
                            <th key={index}>{colObj.value}</th>
                        )}
                    </tr>

                </thead>
                <tbody>
                    {rows.map((obj, index) => {
                        return (
                            <TableRow key={index} obj={obj} btn={btn} />
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
};

export default DataTable;