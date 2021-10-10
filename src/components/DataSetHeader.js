import React, { useState } from 'react'
import '../theme/componentsTheme/DataSetHeader.css'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Bag from '../theme/icons/bag.svg'

import dataheader from '../state/dataheader';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


const DataSetHeader = observer((props) => {
    const formSubmit = (event) => {
        event.preventDefault();
        let element = event.target.elements;
        let formData = {
            "name": element[0].value,
            "quality": element[2].value,
            "type": element[4].value,
            "date_start": element[6].value,
            "date_finish": element[9].value
        }
        console.log(formData);
        dataheader.fetchData(formData)
    }
    const [DateFrom, setDateFrom] = useState('');
    const [DateTo, setDateTo] = useState('');
    const [InputValue, setInputValue] = useState('');
    const [Quality, setQuality] = useState('');
    const [Type, setType] = useState('');



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleQualityChange = (event) => {
        setQuality(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleDateFromChange = (newValue) => {
        setDateFrom(newValue);
    };
    const handleDateToChange = (newValue) => {
        setDateTo(newValue);
    };
    return (
        <form className='DataSetHeader' onSubmit={formSubmit}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                {dataheader.URL}
                <div className='DataSetHeader_inp'>
                    <TextField onChange={handleInputChange} value={InputValue} type='text' name='name' id="outlined-basic" label="Название датасета" variant="outlined" />
                    <FormControl>
                        <InputLabel id="quality">Качество датасета</InputLabel>
                        <Select
                            label='Качество датасета'
                            name='quality'
                            labelId="quality"
                            value={Quality}
                            onChange={handleQualityChange}
                        >
                            <MenuItem value='A'>A</MenuItem>
                            <MenuItem value='B'>B</MenuItem>
                            <MenuItem value='C'>C</MenuItem>
                            <MenuItem value='D'>D</MenuItem>
                            <MenuItem value='E'>E</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="type">Тип датасета</InputLabel>
                        <Select
                            name='type'
                            label='Тип датасета'
                            labelId="type"
                            value={Type}
                            onChange={handleTypeChange}
                        >
                            <MenuItem value='Платный'>Платный</MenuItem>
                            <MenuItem value='Открытый'>Открытый</MenuItem>
                            <MenuItem value='Все'>Все</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='DataSetHeader_date'>
                    <DesktopDatePicker
                        type='date'
                        name='date_start'
                        label="с"
                        inputFormat="yyyy-mm-dd"
                        value={DateFrom}
                        onChange={handleDateFromChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DesktopDatePicker
                        name='date_finish'
                        label="по"
                        inputFormat="yyyy-mm-dd"
                        value={DateTo}
                        onChange={handleDateToChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
                <Button type='submit' variant="contained">Найти</Button>
            </LocalizationProvider>
            <Link to='/favorite'><img height='40' alt='bag' src={Bag}></img></Link>
        </form >
    )
})

export default DataSetHeader