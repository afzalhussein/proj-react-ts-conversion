import { ClassAttributes, HTMLAttributes } from "react";
import "./Counter.css";
type CounterType = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) => JSX.Element;

const Counter: CounterType = (props) => <div {...props}>{props.children}</div>;

export default Counter;
