import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DocumentTitle from 'react-document-title';
import './roboto.css';
import './App.css';

import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ProgrammingComponent from './components/programming/programming';
import AgileQuoteComponent from './components/agile-quote/agile-quote';
import AgileComponent from './components/agile/agile';
import DesignComponent from './components/design/design';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

class App extends Component {
    render() {
        return (
          <DocumentTitle title="Sara Steiert">


            <MuiThemeProvider>
                <div className="App">
                    <ProgressComponent></ProgressComponent>
                    <div className="section header-section">
                        <div className="section-container header-component">
                            <HeaderComponent></HeaderComponent>
                        </div>
                    </div>
                    <div className="section colored">
                        <div className="section-container">
                            <IntroductionComponent></IntroductionComponent>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-container">
                            <TimelineComponent></TimelineComponent>
                        </div>
                    </div>
                    <div className="section colored">
                        <div className="section-container">
                            <ProgrammingComponent></ProgrammingComponent>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-container">
                            <AgileQuoteComponent></AgileQuoteComponent>
                        </div>
                    </div>
                    <div className="section colored">
                        <div className="section-container">
                            <AgileComponent></AgileComponent>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-container">
                            <DesignComponent></DesignComponent>
                        </div>
                    </div>
                    <div className="section colored">
                        <div className="section-container">
                            <CodeGithubComponent></CodeGithubComponent>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-container">
                            <ContactComponent></ContactComponent>
                        </div>
                    </div>
                    <div className="section colored">
                        <div className="section-container">
                            <FooterComponent></FooterComponent>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
            </DocumentTitle>
        );
    }
}

export default App;
