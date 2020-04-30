import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react'
import "../App.css"


class TodoList extends Component {

  constructor(props) {
    super();

    this.state = {
      items: [],
      term: ""
    }
  }


  onChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term],
      term: ""
    })
    e.target.reset();
  }


  render() {
    return (
      <div className="todoListMain">
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
            this.state.items.map((item) => <li> {item} </li> )
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
