import React, { Component } from "react";
import "./App.css";

// Component
//import SelctedButtons from "./SelctedButtons";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    styleName: null,
    colorBoxes: null
  };
  handleWeight = weight => {
    if (weight) {
      this.setState({ styleName: weight });
    }
    console.log(weight);
  };

  handleColor = color => {
    if (color) {
      this.setState({ colorBoxes: color });
    }
    console.log(color);
  };
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.handleWeight(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.handleColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            fontWeight: this.state.styleName,
            color: this.state.colorBoxes
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
