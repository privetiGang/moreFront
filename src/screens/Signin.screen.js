import React, { useState } from 'react'
import '../theme/screensTheme/Signin.css'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import signin from '../state/signin'

const Signin = observer((props) => {

    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState('');

    const changeLogin = (event) => {
        setLogin(event.target.value)
    };
    const changePassword = (event) => {
        setPassword(event.target.value)
    };

    const formSubmit = (event) => {
        event.preventDefault()
        let hm = {}
        Array.from(event.target.elements).forEach(element => {
            if (element.name !== '') {
                signin.formData[element.name] = element.value
                hm[element.name] = element.value
            }
        })
        signin.formData = {
            key: event.target.elements['login'].value,
            value: event.target.elements['password'].value
        }
        signin.fetchData(hm)
        setLogin('')
        setPassword('')
    };

    return (
        <main className='Signin' >
            <form className='signInBody' onSubmit={(event) => formSubmit(event)}>
                <h1>Войти</h1>
                <div className='signInBody_inputs'>
                    <TextField type='text' onChange={changeLogin} value={Login} name='login' id="outlined-basic" label="Логин" variant="outlined" />
                    <TextField type='password' onChange={changePassword} value={Password} name='password' id="outlined-basic" label="Пароль" variant="outlined" />
                </div>
                <div className='signInBody_buttons'>
                    <Link to={'/signup'}>Создать аккаунт</Link>
                    <Button type='submit' variant="outlined">Войти</Button>
                </div>
            </form>
        </main >
    )
})

export default Signin