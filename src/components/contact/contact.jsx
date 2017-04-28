import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './contact.css';


class ContactComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
          <div className="contact">
            <p>Are you nosy? Then write me a message:</p>
            <TextField
              hintText="Name"
              floatingLabelText="Name"
              style={{"width": "100%"}}
              floatingLabelFocusStyle={{"color": "#A80202"}}
              underlineFocusStyle={{"border-color": "#A80202"}}
            />
            <TextField
              hintText="E-mail"
              floatingLabelText="E-mail"
              style={{"width": "100%"}}
              floatingLabelFocusStyle={{"color": "#A80202"}}
              underlineFocusStyle={{"border-color": "#A80202"}}
            />
            <TextField
                hintText="Your message"
                floatingLabelText="Your message"
                style={{"width": "100%"}}
                multiLine={true}
                rows={2}
                floatingLabelFocusStyle={{"color": "#A80202"}}
                underlineFocusStyle={{"border-color": "#A80202"}}
            />
          <div className="contact-btn">
            <RaisedButton label="Send message" backgroundColor="#A80202" labelColor="white"/>
          </div>
          </div>
        );
    }
}

export default ContactComponent;
