import React, { useState } from 'react'
import '../theme/screensTheme/FavDatasets.css'
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';

import dataset from '../state/dataset';

const FavDatasets = observer((props) => {
    const [Selected, setSelected] = useState('');
    const [FunkValue, setFunkValue] = useState('');
    const [DoubleFunkValue, setDoubleFunkValue] = useState('');
    const [secondSetValue, setsecondSetValue] = useState('');

    const changeSecondSet = (event) => {
        setsecondSetValue(event.target.value)
    }
    const changeFunk = (event) => {
        setFunkValue(event.target.value)
    }
    const changeDouble = (event) => {
        setDoubleFunkValue(event.target.value)
    }
    const handleClick = (event, name) => {
        setSelected(name)
    }
    debugger
    let features = { "features": [] }

    const formSubmit = (event) => {
        event.preventDefault()
        if (Selected !== '') {

            if (FunkValue !== '') {
                dataset.features['features'].push({ [FunkValue]: Selected })
            }
            if (DoubleFunkValue !== '' && secondSetValue !== '') {

                dataset.features['features'].push({
                    [DoubleFunkValue]: [
                        Selected,
                        secondSetValue
                    ]
                })
            }
        }
        setSelected('')
        setFunkValue('')
        setDoubleFunkValue('')
        setsecondSetValue('')
        debugger
    }
    const deb = (event) => {
        dataset.deb()
    }

    if (dataset.fav === null || dataset.dataset === null) {
        dataset.datasetFetch()
        dataset.favFetch()
        return <div>загрузка</div>
    } else {
        return (
            <main className='FavDatasets' >
                <div className='FavDatasets_body'>
                    {/* {dataset.features.[0]["avg"][0]} */}
                    <TableContainer sx={{ width: 250 }} component={Paper}>
                        <div>Выбран: {Selected}</div>
                        <Table sx={{ minWidth: 250 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Название датасета</TableCell>

                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {dataset.fav.map((row) => (
                                    <TableRow
                                        key={row['name']}
                                        onClick={(event) => handleClick(event, row['name'])}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row['name']}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <form onSubmit={formSubmit}>
                        <FormControl fullWidth >
                            <InputLabel id="selectLabel">Действие</InputLabel>
                            <Select
                                name='funk'
                                labelId="selectLabel"
                                value={FunkValue}
                                label="Действие"
                                onChange={changeFunk}
                            >
                                <MenuItem value='avg'>avg()</MenuItem>
                                <MenuItem value='data'>data</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth >
                            <InputLabel id="doubleLabel">Действие с двумя датасетами</InputLabel>
                            <Select
                                name='funk'
                                labelId="doubleLabel"
                                value={DoubleFunkValue}
                                label="Действие с двумя датасетами"
                                onChange={changeDouble}
                            >
                                <MenuItem value='+'>+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth >
                            <InputLabel id="secondSet">Выбрать второй датасет</InputLabel>
                            <Select
                                name='funk'
                                labelId="secondSet"
                                value={secondSetValue}
                                label="Выбрать второй датасет"
                                onChange={changeSecondSet}
                            >
                                {dataset.fav.map(data => {
                                    return <MenuItem value={data.name}>{data.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <Button type='submit' variant="contained">Выполнить</Button>
                        <Button onClick={() => dataset.fetchFeatch(dataset.features)} variant="outlined">Сохранить фичу</Button>
                    </form>
                    <code className='calcJson'>{JSON.stringify(dataset.features)}</code>

                </div >
            </main >
        )
    }
})

export default FavDatasets