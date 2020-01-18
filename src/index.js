import ReactDOM from 'react-dom'
import React from  'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'




const element = document.getElementById('root')
ReactDOM.render(
    <div>
    <FirstComponent/>
    <SecondComponent/>
    <ThirdComponent valor ="estou usando props" />
    </div>
,element)

