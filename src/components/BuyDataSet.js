import React, { useState, useEffect } from 'react'
import '../theme/componentsTheme/BuyDataSet.css'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dataset from '../state/dataset';
import { Link } from 'react-router-dom';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '100',
    },
];


function valuetext(value) {
    return value;
}

const BuyDataSet = (props) => {

    const [SliderValue, setSliderValue] = useState('0');
    const [Price, setPrice] = useState('1');
    const [Total, setTotal] = useState('');
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    const DataValueChange = (event) => {
        if (event.target.value >= 0 && event.target.value <= 100) {
            setSliderValue(event.target.value);
        }
    };
    const PriceValueChange = (event) => {

        if (event.target.value >= 0 && event.target.value <= 10) {
            setPrice(event.target.value);
        }
    };
    const ChangeValueTotal = (event) => {

        if (event.target.value <= (marks[1].value * Price)) {
            setTotal(event.target.value);
        }
    };

    useEffect(() => {
        setTotal(SliderValue * Price)
        let total
        return () => {
            setTotal('')
        };
    }, [Price, SliderValue]);
    useEffect(() => {
        setSliderValue(Total / Price)
    }, [Total]);

    return (
        <div className='BuyDataSet' >
            <div className='BuyDataSet_calculate'>
                <Slider
                    onChange={handleSliderChange}
                    value={SliderValue}
                    marks={marks}
                    valueLabelDisplay="auto"
                />
                <div className='BuyDataSet_calculate-inputs'>
                    <TextField fullWidth onChange={DataValueChange}
                        value={SliderValue} size="small" type='text' name='data-value' label="????????????????????" variant="standard" />
                    x
                    <TextField fullWidth onChange={PriceValueChange}
                        value={Price} size="small" type='text' name='price' label="???????? ???? 1" variant="standard" />
                    =
                    <TextField fullWidth onChange={ChangeValueTotal}
                        value={Total} size="small" type='text' name='total' label="???????????????? ????????" variant="standard" />
                </div>
                <Link to='/dataset'> <Button onClick={() => dataset.fetchBuy(props.id)} variant="contained">????????????</Button></Link>

            </div >
        </div>
    )
}

export default BuyDataSet