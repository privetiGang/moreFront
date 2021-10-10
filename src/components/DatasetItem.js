import React, { useState } from 'react'
import '../theme/componentsTheme/DatasetItem.css'
import BuyDataSet from './BuyDataSet'
import Data from './Data'
import DataSetHeader from './DataSetHeader'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import dataset from '../state/dataset'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const DatasetItem = observer((props) => {
    // debugger
    // let hm = props.data['id']
    // let rated = dataset.stars.includes(hm) ?

    //     console.log(hm);
    // console.log(rated);
    const [Star, setStar] = useState('null');
    const changeStar = (event, hm) => {
        debugger
        setStar(hm)
        dataset.setFav(event.target.name)
    }
    if (props.data['payable'] === '1') {
        return (

            <div className='DatasetItem' >
                {/* {
                "id": 1,
                "name": "Покупатели МТС",
                "dates": "01.2020-01.2021",
                "fields": "Контакты, сумма, покупка",
                "description": "Содержит данные",
                "size": "3x10",
                "completenes": 20
            }, */}
                {/* <BuyDataSet /> */}
                <h3 style={{ opacity: 0.4 }}>{props.data['name']}</h3>
                <div className='DatasetItem_uls'>
                    <div style={{ opacity: 0.4 }}>
                        <p>Поля датасета</p>
                        <ul>
                            {
                                props.data['fields'].split(',').map(el => {
                                    return (<li>{el}</li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className='DatasetItem_buttons'>
                        <Button variant="contained">Купить данные</Button>
                        <Link to={`/dataset/${props.data['id']}`}><Button variant="contained">Изучить данные</Button></Link>
                    </div>

                </div>
            </div >
        )
    }
    return (
        <div className='DatasetItem' >
            {/* {
        "id": 1,
        "name": "Покупатели МТС",
        "dates": "01.2020-01.2021",
        "fields": "Контакты, сумма, покупка",
        "description": "Содержит данные",
        "size": "3x10",
        "completenes": 20
    }, */}
            {/* <BuyDataSet /> */}

            <h3>{props.data['name']}</h3>
            <Rating name={props.data['id']} onChange={changeStar} value={Star} max={1} />


            <div className='DatasetItem_uls'>
                <div>
                    <p>Поля датасета</p>
                    <ul>
                        {
                            props.data['fields'].split(',').map(el => {
                                return (<li>{el}</li>)
                            })
                        }
                    </ul>
                </div>

                <div>
                    <p>Информация о датасетах</p>
                    <ul>
                        <li>{props.data['dates']}</li>
                        <li>{props.data['description']}</li>
                        <li>{props.data['size']}</li>
                        <li>{props.data['completenes']}</li>
                    </ul>
                </div>
                <Button style={{ marginTop: '20px' }} variant="contained">Скачать данные</Button>

            </div>
        </div >
    )
})

export default DatasetItem