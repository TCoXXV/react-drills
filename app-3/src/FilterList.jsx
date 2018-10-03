import React, {Component} from 'react';

export default class FilterList extends Component{
    constructor(){
        super();
        this.state = {
            array: [
                'Spaghetti',
                'ice cream',
                'sushi',
                'bologna',
                'cheese'],
            filteredArray: '',
            
        }
        this.filtered = this.filtered.bind(this);
        // this.userInput = this.userInput.bind(this);
    }

    // userInput(e){
    //     this.setState({ userInput: e.target.value })
    // }

    filtered(val){
        this.setState({ filteredArray: val });
    }

    render(){
        let filteredFoods = this.state.array.filter((el)=>{
            return el.includes(this.state.filteredArray);
        }).map((el,i)=>{
            return <h2 key={i}>{el}</h2>
        });
        
        return(
            <div>
                <input onChange={e=>this.filtered(e.target.value)} type="text"/>
                <br />
                <br />
               { filteredFoods }
            </div>
        )
    }
}