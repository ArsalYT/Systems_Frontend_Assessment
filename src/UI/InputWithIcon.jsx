import React from "react";
import "./InputWithIcon.css"; // Import your CSS or use a CSS-in-JS solution
import SendIcon from "./SendIcon"; // Adjust the path to your SVG component

const InputWithIcon = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="input-container">
      <input
        type="text"
        placeholder="Type something"
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit" className="svg-icon" onClick={props.onClick}>
        <SendIcon /> {/* Include the SVG component */}
      </button>
    </form>
  );
};

export default InputWithIcon;
