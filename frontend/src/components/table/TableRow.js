import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import ButtonComp from '../button/ButtonComp';

const TableRow = ({ obj, btn }) => {
    const [btnText, setBtnText] = useState(btn);
    const history = useHistory();

    const onHandleClick = (e, obj) => {
        if (e.target.innerText === 'Save Data') {
            /** Saving Data in MongoDB */
            fetch("http://localhost:5000/saveData", {
                method: 'POST',
                "crossDomain": true,
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(obj)
            }).then(response => response.json())
                .then(data => {
                    setBtnText('View');
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else if (e.target.innerText === 'View') {
            // Navigate to View Page
            const newUrl = 'view';
            history.push(newUrl);
        } else if (e.target.innerText === 'Delete') {
            const id = obj._id;
            const urlDel = 'http://localhost:5000/delData/' + id;
            fetch(urlDel, {
                method: 'GET',
                "crossDomain": true,
                "headers": { "content-type": "application/json" }
            }).then(response => response.json())
                .then(data => {
                    console.log('Record Deleted Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };


    return (
        <tr className='text-center' >
            <td>{obj.name}</td>
            <td>{obj.asset_id}</td>
            <td>
                <ButtonComp text={btnText} handleBtnClick={(e) => onHandleClick(e, obj)} />
            </td>
            <td>{obj.price_usd}</td>
        </tr>
    )
};

export default TableRow;
