import React, {Component} from 'react';

export default class NewComponent extends Component {
    constructor(){
        super();
        this.state = {
            message: ''
        }
        // this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(val){
        this.setState({ message: val });
    }

    render(){
        return(
            <div>
                <input onChange={e=>this.updateMessage(e.target.value)}
                type="text"/>
                <br />
                <span>{this.state.message}</span>

            </div>
        )
    }
}