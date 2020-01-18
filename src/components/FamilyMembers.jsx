import React from 'react'
import Son from './SonComponent'


 const familyMember = (props) => 
    <div>
        <h1>Family</h1>
        <Son name="Jonh" surname={props.surname}/>
        <Son name="Joane" surname={props.surname}/> 
    </div>

export default familyMember