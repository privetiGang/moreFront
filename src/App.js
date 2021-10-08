import './App.css';
import React from 'react';
import MainStore from './state/store';
import { useState } from 'react'
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const formSubmit = (event) => {
    event.preventDefault()
    debugger
    MainStore.formData = {
      key: event.target.elements['key'].name,
      value: event.target.elements['value'].name
    }
    console.log(MainStore.formData);
    console.log(MainStore.type);
    MainStore.fetchItems()
  }

  const [Input1, setInput1] = useState('');
  const [Input2, setInput2] = useState('');
  const [Input3, setInput3] = useState('');

  const changeValue1 = (event) => {
    setInput1(event.target.value)
  }
  const changeValue2 = (event) => {
    setInput2(event.target.value)
  }
  const changeValue3 = (event) => {
    setInput3(event.target.value)
  }


  return (
    <div className="App">
      <form onSubmit={(event) => formSubmit(event)}>
        <input name='1-checkbox' type='checkbox'></input>
        <input name='2-checkbox' type='checkbox'></input>
        <input name='3-checkbox' type='checkbox'></input>
        <div>'inp1' {Input1}</div>
        <p><input name='1-input' onChange={(event) => changeValue1(event)} value={Input1} type='text'></input>
          <button onClick={(event) => MainStore.type = "get"}>get </button></p>
        <div>'inp2' {Input2}</div>
        <p><input placeholder='key' name='key' onChange={(event) => changeValue2(event)} value={Input2} type='text'></input>
          <button onClick={(event) => MainStore.type = "post"} type='submit'>post</button></p>
        <div>'inp3' {Input3}</div>
        <p><input placeholder='value' name='value' onChange={(event) => changeValue3(event)} value={Input3} type='text'></input>
          <button onClick={(event) => MainStore.type = "delete"} type='submit'>delete</button></p>
      </form >

      {
        MainStore.items && MainStore.items.map(el => {
          return (
            <div>ключ:{el.key} - значение:{el.value}</div>
          )
        })
      }
    </div >
  );
})

export default App;
