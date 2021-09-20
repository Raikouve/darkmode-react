import React, { Component } from 'react';
import { ReactComponent as Moon } from './svg/moon.svg';
import { ReactComponent as Sun } from './svg/sun.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.state = {
      isDarkMode: false,
    }
  }

  toggleDarkMode() {
    const { isDarkMode } = this.state;
    this.setState({
      isDarkMode: !isDarkMode,
    });
  }

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className={ isDarkMode ? `home-darkmode` : `home-lightmode` }>
        <div className="switch-container">
          <div className="svg-container">
            { isDarkMode ? <Moon className="moon" /> : <Sun className="sun" /> }
          </div>
          <input
            type="checkbox"
            className={ isDarkMode ? 'light-btn' : 'dark-btn' }
            onClick={ this.toggleDarkMode }
          >
          </input>
        </div>
      </div>
    )
  }
}

export default App;
