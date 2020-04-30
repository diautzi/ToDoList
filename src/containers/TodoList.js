import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react';
import "../App.css"


class TodoList extends Component {

  constructor(props) {
    super();

    this.state = {
      items: [],
      term: ""
    }
  }

  delete = (e ) => {
    if( this.state.items.includes(e.target.innerText)) {
      let newItems = this.state.items.filter( i => i !== e.target.innerText)
      this.setState({
        items: newItems
      })
    }
  }

  onChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault();
    if(this.state.term.length > 0 ) {
      this.setState({
        items: [...this.state.items, this.state.term],
        term: ""
      })
      e.target.reset();
    }
  }


  render() {
    return (
      <div className="todoListMain">
      <h1 className="title"> Todo List</h1>
        <div className="header">
          <form onSubmit={this.addItem}>
            <Input
              onChange={this.onChange}
              placeholder="enter task">
            </Input>
            <Button type="submit">Add</Button>
          </form>
          <ul className="theList">
            {
              this.state.items.map((item) => <li
              onClick = {this.delete}
              key={item}> {item} </li> )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
