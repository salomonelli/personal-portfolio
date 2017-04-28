import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Avatar from 'material-ui/Avatar';
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {height: props.height};
    }

    async componentDidMount() {
      this.setState({height:window.innerHeight+'px'});
    }

    componentWillUnmount() {}

    render() {
        return (
          <div style={{"height": this.state.height}}>
            <div className="header">
                <h3>Sara Steiert</h3>
                <h6>Agile Software Developer</h6>

            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#A80202">
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
