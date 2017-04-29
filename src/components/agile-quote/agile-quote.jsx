import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                Perfection is not attainable, but if we chase perfection we can catch excellence.
              </span>
              <span className="quote-author">- Vince Lombardi</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
