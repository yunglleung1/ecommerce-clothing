import React, {Component} from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Menu from './Menu/Menu';


class App extends Component {
  constructor(){
    super();
    this.state = {

    };
  };

  render(){
    return (
      <div id = 'app'>
        <Nav />
        <Menu />
      </div>
    );
  };
};

export default App;
