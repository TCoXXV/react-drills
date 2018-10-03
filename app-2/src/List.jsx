import React, {Component} from 'react';

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            array: ['Spaghetti','ice cream','sushi','bologna','cheese'],
        }

    }

    render(){
        return(
            <div>
                <h4>{JSON.stringify(this.state.array[0],null,10)}</h4>
                <h4>{JSON.stringify(this.state.array[1],null,10)}</h4>
                <h4>{JSON.stringify(this.state.array[2],null,10)}</h4>
                <h4>{JSON.stringify(this.state.array[3],null,10)}</h4>
                <h4>{JSON.stringify(this.state.array[4],null,10)}</h4>
            </div>

        )
    }
}