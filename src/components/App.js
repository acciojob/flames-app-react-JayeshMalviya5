import React, { Component, useState } from "react";
import "../styles/App.css";
import Buttons from "./Buttons";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      secondName: "",
      result: "winner",
    };
  }

  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleSecondName = (event) => {
    this.setState({ secondName: event.target.value });
  };

  clearInput = () => {
    this.setState({ firstName: "", secondName: "" });
  };

  calculatorResult = () => {
    let a = this.state.firstName;
    let b = this.state.secondName;
    let result1 = "";
    let result2 = "";
    for (let i = 0; i < a.length; i++) {
      let char1 = a[i];
      let index = b.indexOf(char1);
      if (index === -1) {
        result1 += char1;
      } else {
        result1 += char1;
        result2 += b.slice(0, index) + b.slice(index + 1);
        b = result2;
        result2 = "";
      }
      return resu
    }
  };

  render() {
    return (
      <div id="main">
        <div>
          First Name :
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleFirstName}
          />
        </div>
        <div>
          Second Name :
          <input
            type="text"
            placeholder="Second Name"
            value={this.state.secondName}
            onChange={this.handleSecondName}
          />
        </div>
        <div>
          <h3 data-testid="answer">{this.state.result}</h3>
        </div>
        <Buttons
          clear={this.clearInput}
          result={this.calculatorResult}
        ></Buttons>
      </div>
    );
  }
}
export default App;
