import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import isEmail from 'validator/lib/isEmail';
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

    validateString(str) {
        if (!str || str < 1)
            return false;
        return true;
    }

    /**
     * @throws
     */
    validateForm() {
        if (!this.validateString(this.state.name))
            throw new Error('Please enter your name.');
        if (!isEmail(this.state.email))
            throw new Error('Please enter a valid e-mail address.');
        if (!this.validateString(this.state.message))
            throw new Error('Please enter a message.');
        }

    onSubmit() {
        try {
            this.validateForm();
        } catch (err) {
            this.setState({errorMessage: err.toString()});
        }
        this.setState({successMessage: 'Your message has been sent.'});
        console.dir(this.state);
    }
    onUpdateField(field, event) {
        console.log('UPDATE FIELD');
        this.setState({[field]: event.target.value});
        console.dir(this.state);
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
                    "borderColor": "#A80202"
                }} onChange={e => this.onUpdateField('name', e)}/>
                <TextField hintText="E-mail" floatingLabelText="E-mail" type="email" style={{
                    "width": "100%"
                }} floatingLabelFocusStyle={{
                    "color": "#A80202"
                }} underlineFocusStyle={{
                    "borderColor": "#A80202"
                }} onChange={e => this.onUpdateField('email', e)}/>
                <TextField hintText="Your message" floatingLabelText="Your message" style={{
                    "width": "100%"
                }} multiLine={true} rows={2} floatingLabelFocusStyle={{
                    "color": "#A80202"
                }} underlineFocusStyle={{
                    "borderColor": "#A80202"
                }} onChange={e => this.onUpdateField('message', e)}/> {this.state.errorMessage != null && <p className="error-message message">{this.state.errorMessage}</p>
}
                {this.state.successMessage != null && <p className="success-message message">{this.state.successMessage}</p>
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
