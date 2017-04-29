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
                    title="URL Avatar"
                    subtitle="asdasd"
                    avatar="github.png"
                  />
                <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="http://www.google.de" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
