import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './programming.css';

class ProgrammingComponent extends Component {

    render() {
        const style = {
            width: '100%',
            display: 'inline-block',
            background: '#263238'
        };

        return (
            <div className="programming">
              <p className="headline"> Programming skills</p>
                <div className="programming-console">
                    <Paper zDepth={3} style={style}>
                        <div className="console-header">
                            <div className="console-buttons">
                                <div className="console-button btn-1"></div>
                                <div className="console-button btn-2"></div>
                                <div className="console-button btn-3"></div>
                            </div>
                        </div>
                        <div className="console-content">
                            <ul>
                                <li>&lt;html&gt;</li>
                                <li>
                                  <ul className="no-top-padding">
                                    <li>&lt;head&gt;</li>
                                    <li>
                                      <ul className="no-top-padding">
                                        <li>&lt;title&gt;</li>
                                          <ul className="no-top-padding">
                                            <li>Programming skills</li>
                                          </ul>
                                        <li>&lt;/title&gt;</li>
                                      </ul>
                                    </li>
                                    <li>&lt;/head&gt;</li>
                                    <li>&lt;body&gt;</li>
                                    <li>
                                      <ul className="no-top-padding">
                                        <li>&lt;ul&gt;</li>
                                        <ul className="no-top-padding">
                                          <li>&lt;li&gt; ES.next &lt;/li&gt;</li>
                                          <li>&lt;li&gt; Node.js &lt;/li&gt;</li>
                                          <li>&lt;li&gt; React &lt;/li&gt;</li>
                                          <li>&lt;li&gt; Angular 2 &lt;/li&gt;</li>
                                          <li>&lt;li&gt; Docker &lt;/li&gt;</li>
                                          <li>&lt;li&gt; Linux &lt;/li&gt;</li>
                                          <li>&lt;li&gt; LESS, SASS &lt;/li&gt;</li>
                                          <li>&lt;li&gt; HTML5, CSS3 &lt;/li&gt;</li>
                                        </ul>
                                        <li>&lt;/ul&gt;</li>
                                      </ul>
                                    </li>
                                    <li>&lt;/body&gt;</li>
                                  </ul>
                                </li>
                                <li>&lt;/html&gt;</li>
                            </ul>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default ProgrammingComponent;
