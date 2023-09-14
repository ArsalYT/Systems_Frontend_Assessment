import React from "react";
import "./InputWithIcon.css";
import SendIcon from "./SendIcon";

const InputWithIcon = (props) => {
  const inputClasses = props.reply
    ? "input-container-reply"
    : "input-container";
  return (
    <form onSubmit={props.onSubmit}>
      <div className={inputClasses}>
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
