import React, {Component} from 'react';
import './agile.css';


class AgileComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
          <div className="agile">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                Perfection is not attainable, but if we chase perfection we can catch excellence.
              </span>
              <span className="quote-author">- Vince Lombardi</span>
            </p>

              <p>blabla</p>
          </div>
        );
    }
}

export default AgileComponent;
