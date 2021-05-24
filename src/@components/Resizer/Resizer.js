import React, { Component } from "react";
import "./Resizer.scss";

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

export default Resizer;
