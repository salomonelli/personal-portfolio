import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';


class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
          <div className="footer">

            <FlatButton label="Back to top" />
          </div>
        );
    }
}

export default FooterComponent;
