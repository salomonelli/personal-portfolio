import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './roboto.css';
import './App.css';

import ProgressComponent from './components/progress/progress';
import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ContactComponent from './components/contact/contact';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <ProgressComponent></ProgressComponent>
                    <div className="section">
                        <HeaderComponent></HeaderComponent>
                    </div>
                    <div className="section colored">
                        <IntroductionComponent></IntroductionComponent>
                    </div>
                    <div className="section">
                      <TimelineComponent></TimelineComponent>
                    </div>
                    <div className="section">
                        <ContactComponent></ContactComponent>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
