import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Javascript, cats and müsli.
              Professional Cake-Eater. Defender of peace.
              Junior IT Consultant, currently living in Stuttgart, Germany.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
