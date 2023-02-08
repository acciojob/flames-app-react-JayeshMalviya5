import React, { Component, useState } from "react";
import "../styles/App.css";
import Buttons from "./Buttons";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      secondName: "",
      result: "",
    };
  }

  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleSecondName = (event) => {
    this.setState({ secondName: event.target.value });
  };

  clearInput = () => {
    this.setState({ firstName: "", secondName: "",result:"" });

  };

  calculatorResult = () => {
    let str1 = this.state.firstName;
    let str2 = this.state.secondName;
    let result1 = "";
  let result2 = "";
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let index = str2.indexOf(char1);
    if (index === -1) {
      result1 += char1;
    } else {
      result1 += char1;
      result2 += str2.slice(0, index) + str2.slice(index + 1);
      str2 = result2;
      result2 = "";
    }
  }
  let ans = result1.length + result2.length;
  if(ans%6==0){
    this.setState({result: "Sibling"})
  }
  if(ans%6==1){
    this.setState({result: "Friends"})
  }
  if(ans%6==2){
    this.setState({result: "Love"})
  }
  if(ans%6==3){
    this.setState({result: "Affection"})
  }
  if(ans%6==4){
    this.setState({result: "Marrrige"})
  }
  if(ans%6==5){
    this.setState({result: "Enemey"})
  }
  if(str1.length==0 || str2.length==0){
    this.setState({result: "Please enter valid input"})
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
