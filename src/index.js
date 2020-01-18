import ReactDOM from 'react-dom'
import React from  'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
const element = document.getElementById('root')
ReactDOM.render(
    <div>
    <FirstComponent/>
    <SecondComponent/>
    </div>
,element)

