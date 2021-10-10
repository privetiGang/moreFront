import React, { useState } from 'react'
import '../theme/screensTheme/Dataset.css'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import DatasetItem from '../components/DatasetItem';
import DataSetHeader from '../components/DataSetHeader';

import dataset from '../state/dataset';

const Dataset = observer((props) => {

    // this.state = {
    //     name: "",
    //     email: "",
    //     id: ""
    // };
    // this.props.keycloak.loadUserInfo().then(userInfo => {
    //     debugger
    //     this.setState({ role: userInfo.preferred_username })
    // });
    if (dataset.dataset === null) {
        dataset.datasetFetch()
    }

    if (dataset.dataset !== null) {
        return (

            <main className='Dataset' >
                <div className='dataSetsBody'>
                    <DataSetHeader />
                    {dataset.dataset.map(data => <DatasetItem data={data} />)}
                </div>
            </main >
        )
    }
    return <div>загрузка</div>

})

export default Dataset