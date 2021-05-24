import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Resizer.css";

class Resizer extends Component {
  constructor(props) {
    super(props);
  }
  handleResizing = (e) => {
    this.props.updateStateResizing(true);
  }
  render() {
    const style = {
      width: 16,
      height: 16
    };
    return (
      <div
        className="flexible-modal-resizer"
        style={style}
        onMouseDown={this.handleResizing}
        onTouchStart={this.handleResizing}
      />
    );
  }
}

Resizer.propTypes = {
  updateStateResizing: PropTypes.func,
}

Resizer.defaultProps = {
  updateStateResizing: () => {}
}

export default Resizer;
