import ReactDOM from 'react-dom'
import React from 'react'
// import FirstComponent from './components/FirstComponent'
// import SecondComponent from './components/SecondComponent'
// import ThirdComponent from './components/ThirdComponent'
// import { CompA, CompB } from './components/MultComponents'
// import Family from './components/Family'
// import SonComponent from './components/SonComponent'
// import Father from './components/Father'
// import ClassComponent from './components/ClassComponent'
// import CountComponent from './components/CountComponent'
import Hook from './components/Hook'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook/>
        {/* <ClassComponent valor="I'm a Class Component" /> */}
        {/* <CountComponent count={0}/> */}
        {/* <FirstComponent />
        <SecondComponent />
        <ThirdComponent valor="estou usando props" />
        <CompA value="hi i'm A" />
        <CompB value="B on the Area" />
        <Family surname="Bergs">
            <SonComponent name="Jonh"/>
            <SonComponent name="Joane"/>
        </Family>
        <Father/> */}
    </div>
        , element)
    
