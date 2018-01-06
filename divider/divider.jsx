import React, {Component} from 'react';
import './divider.css';

const transitionTime = 2000;

class DividerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    async open() {
        this.setState({open: true});
        return new Promise(res => setTimeout(res, transitionTime));
    }

    async close() {
        this.setState({open: false});
        return new Promise(res => setTimeout(res, transitionTime));
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className={this.state.open
                ? 'dividers open'
                : 'dividers'}>
                <div className="divider left"></div>
                <div className="divider right"></div>
            </div>
        );
    }
}

export default DividerComponent;
