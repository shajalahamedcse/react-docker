import React from 'react';
import axios from 'axios';

export default class TodoList extends React.Component{
    state = {
        todos: []
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
        const todos = res.data;
        this.setState({ todos });
      })
    }

    render() {
        return (
          <ul>
            { this.state.todos.map(person => <li>{person.name}</li>)}
          </ul>
        )
      }
}