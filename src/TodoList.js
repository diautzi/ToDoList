import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react'


class TodoList extends Component {

  constructor(props) {
    super(props);

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
      term: "",
      items: [...this.state.items, this.state.term]
    })
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
            <Button type="submit">add</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
