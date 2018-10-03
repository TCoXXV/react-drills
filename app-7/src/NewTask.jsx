import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
        };
        this.addInput = this.addInput.bind(this);
    }

    inputChange(val){
        this.setState({ input: val });
    }

    addInput(){
        this.props.add( this.state.input );
        this.setState({ input: '' });
    }

    render(){
        return (
            <div>
                <input value={this.state.input}
                    placeholder='Enter new task'
                    onChange={e=>this.inputChange(e.target.value)}               
                    />

                    <button onClick={ this.addInput } >Add</button>
            </div>
        )
    }
}