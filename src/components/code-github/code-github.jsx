import React, {Component} from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
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
                    <CardMedia>
                      <div className="github-background-img">
                        <img src="https://assets-cdn.github.com/images/modules/site/heroes/home-code-bg-alt-01.svg"/>
                      </div>
                    </CardMedia>
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
