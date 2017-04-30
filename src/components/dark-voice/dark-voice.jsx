import React, {Component} from 'react';
import './dark-voice.css';


class DarkVoiceComponent extends Component {

    render() {
        return (
          <div className="dark-voice">
            <p className="text-justify">
              <b className="dark-voice-tag">&#x3C;darkVoice&#x3E; </b>
              <br/>
              In the world of 1000 frameworks, I'm fighting for the cause of
              clean and well structured code. No bug can stop me. No build-tool will dominate me.
              When the tests fail and the linting breaks, I will remain.
              <br/>
              <b className="dark-voice-tag">&#x3C;/darkVoice&#x3E;</b>
            </p>
          </div>
        );
    }
}

export default DarkVoiceComponent;
