import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    onScrollToTop() {
        scrollTo(0, 0, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
            <div className="footer">
              <div className="link-list">
                <a href="">
                  Github
                </a> / <a href="">
                  Twitter
                </a> / <a href="">
                  Xing
                </a> / <a href="">
                  LinkedIn
                </a>
              </div>
                <FlatButton labelStyle={{"color":"rgba(0, 0, 0, 0.65)"}} label="Back to top" onClick={this.onScrollToTop}/>
            </div>
        );
    }
}

export default FooterComponent;
