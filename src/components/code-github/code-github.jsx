import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import React, { Component } from "react";

import "./code-github.css";

class CodeGithubComponent extends Component {
  render() {
    return (
      <div className="code-github">
        <p className="headline">Look at my code, my code is amazing</p>
        <Card>
          <CardHeader
            subtitle="Github Repository"
            title="juanmeireles/personal-portfolio"
            avatar="github.png"
          />
          <CardText>
            This application is made with React and Material UI. Check out the
            code on Github.
          </CardText>
          <CardActions>
            <FlatButton
              label="View on github"
              href="https://github.com/JuanMeireles/react-portifolio"
              target="_blank"
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CodeGithubComponent;
