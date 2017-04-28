import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import './programming.css';

class ProgrammingComponent extends Component {
    constructor(props) {
        super(props);

    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {

        return (
            <div className="programming">
              <p>Programming skills</p>
                <div className="programming-skill">
                    <Chip backgroundColor="#A29565">
                        <Avatar src="node.jpg"/>
                        Node.js
                    </Chip>
                </div>
                <div className="programming-skill">
                    <Chip backgroundColor="#A29565">
                        <Avatar src="react.svg"/>
                        React
                    </Chip>
                </div>
                <div className="programming-skill">
                    <Chip backgroundColor="#A29565">
                        <Avatar src="angular.png"/>
                        Angular 2
                    </Chip>
                </div>
                <div className="programming-skill">
                    <Chip backgroundColor="#A29565">
                        <Avatar src="docker.png"/>
                        Docker
                    </Chip>
                </div>
                <div className="programming-skill">
                    <Chip backgroundColor="#A29565">
                        <Avatar src="git.png"/>
                        git
                    </Chip>
                </div>
            </div>
        );
    }
}

export default ProgrammingComponent;
