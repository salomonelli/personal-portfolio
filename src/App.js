import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './roboto.css';
import './App.css';

import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="section">
            <HeaderComponent></HeaderComponent>
            </div>
            <div className="section colored">
              <IntroductionComponent></IntroductionComponent>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
