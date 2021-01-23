import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form";

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn React', important: true, id: 'qe12f'},
        {label: 'That is so good', important: false, id: 'qe3rf'},
        {label: 'I need a break...', important: false, id: 'qef'},
      ]
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr
      }

    })
  }

  addItem(body) {
    console.log(body);
  }

  render() {
    return (

        <AppBlock>
          <AppHeader/>
          <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
          </div>
          <PostList
              onDelete={this.deleteItem}
              posts={this.state.data}
          />
          <PostAddForm/>
        </AppBlock>
    )
  }


}
