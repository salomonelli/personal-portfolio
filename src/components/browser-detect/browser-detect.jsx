import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './browser-detect.css';

class BrowserDetectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  async componentDidMount() {
    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;
    if(isIE || isEdge) this.setState({open: true});
  }

    render() {

      const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
        return (
          <div className="browser-detect">
              <Dialog
                title="I hate your browser."
                actions={actions}
                modal={true}
                open={this.state.open}
              >
               Internet Explorer and Edge are not supported. Same for Safari :)
              </Dialog>
          </div>
        );
    }
}

export default BrowserDetectComponent;
