import React from "react";
import "./InputWithIcon.css";
import SendIcon from "./SendIcon";

const InputWithIcon = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Write a comment"
          value={props.value}
          onChange={props.onChange}
        />
        <button className="submit-button" type="submit" onClick={props.onClick}>
          <SendIcon /> {/* Include the SVG component */}
        </button>
      </div>
    </form>
  );
};

export default InputWithIcon;
