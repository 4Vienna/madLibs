import React, { Component } from 'react';

import Input from './input';

class Card extends Component {


    constructor(){
        super()

        this.state={
            color: "Blue",
            pluralNoun: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event){
        this.setState( {color: event.target.value } )

    }

    render() {

        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <input value= { this.state.value } onChange={(event) => this.handleInputChange(event)}/>
            </div>
        )

        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input('Color') }
                { Input('Plural Noun') }
            </div>
        )
    }
}

export default Card;