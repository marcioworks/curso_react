import ReactDOM from 'react-dom'
import React from  'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import {CompA,CompB} from './components/MultComponents'


const element = document.getElementById('root')
ReactDOM.render(
    <div>
    <FirstComponent/>
    <SecondComponent/>
    <ThirdComponent valor ="estou usando props" />
    <CompA value="hi i'm A"/>
    <CompB value="B on the Area"/>
    </div>
,element)

