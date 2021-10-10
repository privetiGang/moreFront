import React, { useState } from 'react'
import '../theme/screensTheme/Signup.css'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import signup from '../state/signup'


const Signup = () => {
    const [Role, setRole] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState('');

    const RoleChange = (event) => {
        setRole(event.target.value)
    }
    const FirstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const LastNameChange = (event) => {
        setLastName(event.target.value)
    }
    const UserNameChange = (event) => {
        setUserName(event.target.value)
    }
    const LoginChange = (event) => {
        setLogin(event.target.value)
    }
    const PasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const formSubmit = (event) => {
        let hm = {}
        event.preventDefault()
        Array.from(event.target.elements).forEach(element => {
            if (element.name !== '') {
                signup.formData[element.name] = element.value
                hm[element.name] = element.value
            }
        })
        signup.fetchData(hm)
        setRole('')
        setFirstName('')
        setLastName('')
        setUserName('')
        setLogin('')
        setPassword('')
    };

    return (
        <div className='Signup'>
            <div className='signUpBody'>
                <form onSubmit={formSubmit}>
                    <h1>Зарегистрироваться</h1>
                    {/* <div className='signUpBody_inputs'>
                        <TextField onChange={FirstNameChange}
                            value={FirstName} size="small" type='text' name='first-name' label="Имя" variant="outlined" />
                        <TextField onChange={LastNameChange}
                            value={LastName} size="small" type='text' name='last-name' label="Фамилия" variant="outlined" />
                    </div> */}

                    <div className='signUpBody_inputs'>
                        <TextField fullWidth onChange={LoginChange}
                            value={Login} size="small" type='text' name='login' label="Логин" variant="outlined" />
                        <TextField fullWidth onChange={PasswordChange}
                            value={Password} size="small" type='password' name='password' label="Пароль" variant="outlined" />
                    </div>
                    <div className='signUpBody_username'>
                        {/* <TextField onChange={UserNameChange}
                            value={UserName} fullWidth size="small" type='text' name='user-name' label="Имя пользователя" variant="outlined" /> */}

                        <FormControl fullWidth size="small">
                            <InputLabel id="selectLabel">Роль</InputLabel>
                            <Select
                                name='role'
                                labelId="selectLabel"
                                value={Role}
                                label="Роль"
                                onChange={RoleChange}
                            >
                                <MenuItem value='admin'>Админ</MenuItem>
                                <MenuItem value='customer'>Покупатель</MenuItem>
                                <MenuItem value='guest'>Гость</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='signUpBody_buttons'>
                        <Link to={'/signin'}>Авторизоваться</Link>
                        <Button type='submit' variant="outlined">Создать аккаунт</Button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Signup