import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                Arise, arise, Coders of Github!
                Fell deeds awake, fire and slaughter!
                spear shall be shaken, shield be splintered,
                a sword-day, a red day, ere the sun rises!
                Ride now, ride now! Ride to Gondor!
              </span>
              <span className="quote-author">- Théoden, son of Thengel</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
