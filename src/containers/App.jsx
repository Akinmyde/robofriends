/* eslint-disable import/extensions */
import React, { Component } from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Scroll from '../components/scroll.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchfield: '' };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const onSearchChange = e => this.setState({ searchfield: e.target.value });
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()),
    );
    return (!robots.length)
      ? <h1 className="tc">Loading.....</h1>
      : (
        <div className="tc">
          <h1 className="f1"> RoboFriends </h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
