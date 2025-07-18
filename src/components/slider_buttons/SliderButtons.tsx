import React from "react";
import { ReactNode } from "react";
import $ from 'jquery';
import 'jqueryui'; // Import jQuery UI

type SliderButtonsState = {
  sliderValue: number;
};

type SliderButtonsProps = {};

class SliderButtons extends React.Component<SliderButtonsProps, SliderButtonsState> {
  private sliderRef = React.createRef<HTMLDivElement>();

  constructor(props: SliderButtonsProps) {
    super(props);
    this.state = {
      sliderValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(event: Event, ui: { value: number }) {
    this.setState({ sliderValue: ui.value });
  }

  handleChange(value: number) {
    return () => {
      ($("#slider") as any).slider("value", this.state.sliderValue + value);
    };
  }

  componentDidMount(): void {
    ($("#slider") as any).slider({
      slide: this.handleSlide
    });
  }

  componentWillUnmount() {
    ($("#slider") as any).slider("destroy");
  }

  render(): ReactNode {
    return (
      <div>
        <button
          disabled={this.state.sliderValue < 1}
          className="btn default-btn"
          onClick={this.handleChange(-1)}
        >
          1 Less ({this.state.sliderValue - 1})
        </button>
        <button
          disabled={this.state.sliderValue > 99}
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