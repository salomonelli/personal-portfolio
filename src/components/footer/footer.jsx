import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

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
                <a href="https://github.com/salomonelli">
                  Github
                </a> / <a href="https://twitter.com/salomonelli">
                  Twitter
                </a> / <a href="https://www.xing.com/profile/Sara_Steiert">
                  Xing
                </a> / <a href="https://www.linkedin.com/in/sara-steiert-b0a631134/">
                  LinkedIn
                </a>
              </div>
                <FlatButton labelStyle={{"color":"rgba(0, 0, 0, 0.65)"}} label="Back to top" onClick={this.onScrollToTop}/>
            </div>
        );
    }
}

export default FooterComponent;
