import { StyleType } from "./StyleType";

export interface RadioState {
  outerStyle: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  innerStyle: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  selectedStyle: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  textStyle?: {  // Make this optional since we're not using it anymore
    left?: number;
    fontSize?: number;
  };
}