import React, {Component} from 'react';
import $ from 'jquery';
import './progress.css';


class ProgressComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          completed: 0,
          windowHeight: 0,
          domHeight: 0
        };
    }

    async componentDidMount() {
      this.setHeights();
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    setHeights() {
      this.state.domHeight = $('body').height();
      this.state.windowHeight = $(window).height();
    }

    handleScroll(){
      const scrollTop = $('body').scrollTop();
      let position = Math.round((scrollTop / this.state.domHeight) * 100);
      if(position > 100) position = 100;
      this.setState({
          completed: position + '%'
      });
    }


    render() {
        let progress = this.state.completed;
        console.log(progress);
        return (
          <div className="progress">
            <div
              className="progress-bar"
              style={{"width": progress}}>
            </div>
          </div>
        );
    }
}

export default ProgressComponent;
