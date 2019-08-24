import React, { Component } from "react";

class SelctedButtons extends Component {
  state = {
    styleName: null,
    colorBoxes: null
  };
  handleClick = () => {
    if (this.props.styleName || this.props.colorBoxes) {
      this.setState({
        styleName: this.props.styleName,
        colorBoxes: this.props.colorBoxes
      });
    }
  };
  render() {
    return (
      <div>
        {" "}
        <textarea style={{ color: "red" }} />{" "}
      </div>
    );
  }
}

export default SelctedButtons;
