import React, { Component } from 'react'

export default class CounterClass extends Component {
    state = {
        number: this.props.count
    }

    more = () => {
        this.setState({number:this.state.number + 1})
        
    }

    minus = () => {
        this.setState({number:this.state.number - 1})
    }

    Inc10 = (value) => {
        this.setState({number:this.state.number + value})
    }

    minus10 = (value) => {
        this.setState({number:this.state.number + value})
    }

    render() {
        return (
            <div>
               <div> Number: {this.state.number}</div>
                <button onClick={this.more}>Inc</button>
                <button onClick ={this.minus}>Dec</button>
                <button onClick ={() =>this.Inc10(10)}>Inc10</button>
                <button onClick ={() =>this.minus10(-10)}>Min10</button>
            </div>
        )
    }
}

//solucion 01 -bind
// constructor(){
//     super();
//     this.more = this.more.bind(this)
// }

//Solucion 02 - arrow function(OnClick)
//<button onClick={() =>this.more()}>Inc</button>

//Solucion 03 - arrow function
// more = () => {
//     this.props.number++
//     console.log(this)
// }