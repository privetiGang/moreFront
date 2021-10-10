import React, { useState } from 'react'
import '../theme/screensTheme/DetailDataset.css'
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import dataset from '../state/dataset';
import Modal from '@mui/material/Modal';
import BuyDataSet from '../components/BuyDataSet';

const DetailDataset = observer((props) => {
    const [Open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let { id } = useParams();

    if (dataset.detail === null) {
        dataset.detailFetch(id)
        return <div>загрузка</div>
    } else {
        return (
            <main className='DetailDataset' >
                <div className='DetailDataset_body'>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Контакты</TableCell>
                                    <TableCell align="right">Сумма покупок</TableCell>
                                    <TableCell align="right">Дата покупок</TableCell>
                                    <TableCell align="right">Пол</TableCell>
                                    <TableCell align="right">Возраст</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {dataset.detail.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.contacts}
                                        </TableCell>
                                        <TableCell align="right">{row.sum}</TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.sex}</TableCell>
                                        <TableCell align="right">{row.age}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick={handleOpen} variant="contained">Перейти к покупке</Button>
                </div>
                <Modal
                    open={Open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='DetailDataset_modal'
                >
                    <div className='modalBody'>
                        <BuyDataSet id={id} />
                    </div>
                </Modal>
            </main >
        )
    }
})

export default DetailDataset