import React from "react";
import { ReactNode } from "react";
import $ from 'jquery';

type SliderButtonsState = {
  sliderValue: number;
};

type SliderButtonsProps = {};

class SliderButtons extends React.Component<SliderButtonsProps, SliderButtonsState, {}> {
  constructor(props: SliderButtonsProps) {
    super(props);
    this.state = {
      sliderValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(event: any, ui: { value: any }) {
    this.setState({ sliderValue: ui.value });
  }

  handleChange(value: number) {
    return () => {
      $("#slider").slider("value", this.state.sliderValue + value);
    };
  }

  componentDidMount(): void {
    $("#slider").on("slide", this.handleSlide as any);
  }

  componentWillUnmount = () => {
    $("#slider").off("slide", this.handleSlide as any);
  };

  render(): ReactNode {
    return (
      <div>
        <button
          disabled={this.state.sliderValue < 1 ? true : false}
          className="btn default-btn"
          onClick={this.handleChange(-1)}
        >
          1 Less ({this.state.sliderValue - 1})
        </button>
        <button
          disabled={this.state.sliderValue > 99 ? true : false}
          className="btn default-btn"
          onClick={this.handleChange(1)}
        >
          1 More ({this.state.sliderValue + 1})
        </button>
      </div>
    );
  }
}

export default SliderButtons;
