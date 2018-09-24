import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string
  // title: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
  title: 'Score App'
}
