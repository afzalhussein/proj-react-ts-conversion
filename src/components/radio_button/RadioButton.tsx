import { Component } from "react";
import { RadioState } from "./RadioState";
import { RadioPropsType } from "./RadioPropsType";
import "./RadioButton.css";

class RadioButton extends Component<RadioPropsType, RadioState> {
  constructor(props: RadioPropsType) {
    super(props);
    this.state = {
      outerStyle: this.getStyle(4),
      innerStyle: this.getStyle(1),
      selectedStyle: this.getStyle(2),
      // textStyle can be omitted since it's optional
    };
  }

  getStyle(i: number) {
    const value = i;
    return {
      top: value,
      bottom: value,
      left: value,
      right: value,
    };
  }

  render() {
    return (
      <div className="radio-container">
        <input
          type="radio"
          name={this.props.name}
          id={this.props.id}
          className="radio-input"
        />
        <label htmlFor={this.props.id} className="radio-label">
          <div className="radio-outer" style={this.state.outerStyle}>
            <div className="radio-inner" style={this.state.innerStyle}>
              <div
                className="radio-selected"
                style={this.state.selectedStyle}
              ></div>
            </div>
          </div>
          <span className="radio-text">{this.props.label}</span>
        </label>
      </div>
    );
  }
}

export default RadioButton;