import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import isEmail from 'validator/lib/isEmail';
import LinearProgress from 'material-ui/LinearProgress';
import './contact.css';

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      errorMessage: null,
      successMessage: null,
      messageAlreadySent: false,
      loading: false
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

  async onSubmit() {
    this.setState({successMessage: null});
    this.setState({errorMessage: null});
    this.displayLoadingBar();
    try {
      if (this.state.messageAlreadySent)
        throw new Error('Your message has been already sent.');
      this.validateForm();
      await this.submitData();
      this.setState({successMessage: 'Your message has been sent.'});
      this.setState({messageAlreadySent: true});
    } catch (err) {
      this.setState({errorMessage: err.toString()});
      this.setState({successMessage: null});
    }
    this.displayLoadingBar(false);
  }

  submitData() {
    return fetch('https://gitter-connect.herokuapp.com/api/message', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.state.name, email: this.state.email, message: this.state.message})
    }).then(res => console.dir(res)).catch(e => console.dir(e));
  }

  onUpdateField(field, event) {
    this.setState({[field]: event.target.value});
  }
  displayLoadingBar(to = true) {
    this.setState({loading: to});
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

          {
            this.state.loading &&
            <LinearProgress mode="indeterminate" color="#A80202"/>
          }

          <div className="contact-btn">
            <RaisedButton label="Send message" onClick={this.onSubmit.bind(this)} backgroundColor="#A80202" labelColor="#ffffff"/>
          </div>
      </div>
    );
  }
}

export default ContactComponent;
