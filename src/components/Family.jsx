import React from 'react'
import ChildrenWithProps from '../Utils/utils'
const family = (props) =>
    <div>
        <h1>Family</h1>
       {ChildrenWithProps(props)}
       
    </div>

    export default family