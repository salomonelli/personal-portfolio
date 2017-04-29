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
      const position = Math.round((scrollTop / this.state.domHeight) * 100);
      if(position < 100) this.state.completed = position;
      else this.state.completed = 100;
    }


    render() {
        return (
          <div className="progress">
            <div
              className="progress-bar"
              style={{"width": this.state.completed}}>
            </div>
          </div>
        );
    }
}

export default ProgressComponent;
