import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Avatar from 'material-ui/Avatar';
const scrollTo = require('scroll-to');
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    async componentDidMount() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    componentWillUnmount() {}

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
          <div style={{"height": this.state.height}}>
            <div className="header">
                <h3>Sara Steiert</h3>
                <h6>Software Developer</h6>
            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#A80202" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
