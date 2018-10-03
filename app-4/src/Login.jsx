import React, { Component } from 'react';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.notify = this.notify.bind(this);

    }
    updateUsername(val){
        this.setState({ username: val })
    }
    updatePassword(val){
        this.setState({ password: val })
    }

    notify(){
        alert('Username: ' + this.state.username + ' ' + 'Password: ' + this.state.password)
    }

    render(){
        return(
            <div>
                <input onChange={e=>this.updateUsername(e.target.value)} type="username"/>
                <input onChange={e=>this.updatePassword(e.target.value)} type="password"/>
                <button onClick={this.notify}>Login</button>
            </div>
        )
    }
}