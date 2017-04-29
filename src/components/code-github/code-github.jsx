import React, {Component} from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="code-github">
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="salomonelli/personal-portfolio"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with React and Material UI. Check out the Code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/salomonelli/personal-portfolio" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
