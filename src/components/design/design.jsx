import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
          <div className="design">
            <p className="title">User Experience and Design</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="UX-Consulting"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Photoshop"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Illustrator"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Blender"
              />
          </div>

          </div>
        );
    }
}

export default DesignComponent;
