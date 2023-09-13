import React from "react";
import LikeIcon from "./LikeIcon";
function LikeButton(props) {
  return (
    <>
      <p>{props.count}</p>
      <button type={props.type} onClick={props.onClick}>
        <LikeIcon />
      </button>
    </>
  );
}

export default LikeButton;
