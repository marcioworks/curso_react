import React from 'react'

function childrensWithProps(props){
    return React.Children.map(props.children, son =>{
        return React.cloneElement(son, {...props})
    })
}

export default childrensWithProps