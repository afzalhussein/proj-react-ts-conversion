import { StyleType } from "./StyleType";

export type RadioState = {
  outerStyle: Omit<StyleType, "width" | "height" | "fontSize">;
  innerStyle: Omit<StyleType, "width" | "height" | "fontSize">;
  selectedStyle: Omit<StyleType, "width" | "height" | "fontSize">;
  taggerStyle: Pick<StyleType, "top" | "width" | "height">;
  textStyle?: Pick<StyleType, "left" | "fontSize">;
};
