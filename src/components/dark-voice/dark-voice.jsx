import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MicrophoneIcon from 'material-ui/svg-icons/av/mic';
import './dark-voice.css';


class DarkVoiceComponent extends Component {

    render() {
        return (
            <div className="dark-voice">
              <p className="text-center">
                <p className="text-center dark-voice-text-tag">
                  <b className="dark-voice-tag">&#x3C;darkVoice&#x3E; </b>
                </p>
                In the world of 1000 frameworks, I'm fighting for the cause of
                clean and well structured code. No bug can stop me. No build-tool will dominate me.
                When the tests fail and the linting breaks, I will remain.
                  <p className="text-center dark-voice-text-tag">
                    <b className="dark-voice-tag">&#x3C;/darkVoice&#x3E;</b>
                  </p>
              </p>
              <div className="microphone-action">
                <FloatingActionButton backgroundColor="#A80202">
                  <MicrophoneIcon />
                </FloatingActionButton>
              </div>
            </div>
        );
    }
}

export default DarkVoiceComponent;
