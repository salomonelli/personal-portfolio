import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './contact.css';

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            errorMessage: null,
            successMessage: null
        }
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateString(str) {
        if (!str || str < 1)
            return false;
        return true;
    }

    validateForm() {
        if (!this.validateString(this.state.name))
            return 'Please enter your name.'
        if (!this.validateEmail(this.state.email))
            return 'Please enter your e-mail address.'
        if (!this.validateString(this.state.message))
            return 'Please enter a message.'
        return null;
    }

    onSubmit() {
        const err = this.validateForm();
        this.setState({errorMessage: err});
        if (!err) {
          this.setState({successMessage: 'Your message has been sent.'})
        }
    }
    onUpdateField(field, event) {
        this.state[field] = event.target.value;
    }

    render() {
        return (
            <div className="contact">
              <p className="headline">Contact</p>
                <p>Are you nosy? Then write me a message:</p>
                <TextField hintText="Name" floatingLabelText="Name" style={{
                    "width": "100%"
                }} floatingLabelFocusStyle={{
                    "color": "#A80202"
                }} underlineFocusStyle={{
                    "border-color": "#A80202"
                }} onChange={e => this.onUpdateField('name', e)}/>
                <TextField hintText="E-mail" floatingLabelText="E-mail" type="email" style={{
                    "width": "100%"
                }} floatingLabelFocusStyle={{
                    "color": "#A80202"
                }} underlineFocusStyle={{
                    "border-color": "#A80202"
                }} onChange={e => this.onUpdateField('email', e)}/>
                <TextField hintText="Your message" floatingLabelText="Your message" style={{
                    "width": "100%"
                }} multiLine={true} rows={2} floatingLabelFocusStyle={{
                    "color": "#A80202"
                }} underlineFocusStyle={{
                    "border-color": "#A80202"
                }} onChange={e => this.onUpdateField('message', e)}/>
                {this.state.errorMessage != null &&
                  <p className="error-message message">{this.state.errorMessage}</p>
                }
                {this.state.successMessage != null &&
                  <p className="success-message message">{this.state.successMessage}</p>
                }
                <div className="contact-btn">
                    <RaisedButton label="Send message" onClick={this.onSubmit.bind(this)} backgroundColor="#A80202" labelColor="#ffffff"/>
                </div>

            </div>
        );
    }
}

export default ContactComponent;

/*
<Avatar
size={30}
>
!
</Avatar>
*/
