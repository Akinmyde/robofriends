import React, { Component } from 'react';
import CardList from './CardList.jsx' 
import { robots } from './robots';
import SearchBox from './SearchBox.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        robots: [],
        searchfield: ''
    }
  }

  componentWillMount() {
    this.setState({ robots })
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
       <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;