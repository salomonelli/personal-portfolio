import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import logo from './logo.svg';
import './roboto.css';
import './App.css';

import ProgressComponent from './components/progress/progress';
import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ProgrammingComponent from './components/programming/programming';
import AgileComponent from './components/agile/agile';
import DesignComponent from './components/design/design';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <ProgressComponent></ProgressComponent>
                    <div className="section header-section">
                        <HeaderComponent></HeaderComponent>
                    </div>
                    <div className="section colored">
                        <IntroductionComponent></IntroductionComponent>
                    </div>
                    <div className="section">
                      <TimelineComponent></TimelineComponent>
                    </div>
                    <div className="section colored">
                      <ProgrammingComponent></ProgrammingComponent>
                    </div>
                    <div className="section">
                      <AgileComponent></AgileComponent>
                    </div>
                    <div className="section colored">
                      <DesignComponent></DesignComponent>
                    </div>
                    <div className="section">
                        <ContactComponent></ContactComponent>
                    </div>
                    <div className="section">
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
