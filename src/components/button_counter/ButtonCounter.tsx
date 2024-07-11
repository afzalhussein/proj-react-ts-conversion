import {
  MouseEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import "./ButtonCounter.css";

type ButtonCounterType = (props: {
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => JSX.Element;

const ButtonCounter: ButtonCounterType = (props) => {
  return (
    <button type="button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default ButtonCounter;
