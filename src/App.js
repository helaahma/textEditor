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
    styleName: [],
    colorBoxes: null
  };
  handleWeight = style => {
    let newArray = this.state.styleName;
    const foundStyle = this.state.styleName.find(element => style === element);
    if (!foundStyle) {
      newArray.push(style);
    } else {
      newArray = newArray.filter(element => element !== style);
    }

    this.setState({
      styleName: newArray
    });

    console.log(this.state.styleName);
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
    let newStyles = this.state.styleName;

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          className={`btn btn-${this.state[style] ? "primary" : "light"}`}
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
            fontWeight: newStyles[newStyles.indexOf("bold", 0)],
            fontStyle: newStyles[newStyles.indexOf("italic", 0)],
            textDecorationLine: newStyles[newStyles.indexOf("underline", 0)],
            color: this.state.colorBoxes
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
