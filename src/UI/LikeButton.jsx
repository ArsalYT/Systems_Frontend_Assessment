import React, { useState } from "react";
import LikeIcon from "./LikeIcon"; // Import your heart icon component
import classes from "./LikeButton.module.css";
import "./InputWithIcon.css";
function LikeButton({ count, onClick, type, liked }) {
  const fill = liked ? "#e33e38" : "white";
  return (
    <div className="heart_count">
      <button
        className={
          liked ? classes["like-button-clicked"] : classes["like-button"]
        }
        type={type}
        onClick={onClick}
      >
        <LikeIcon fill={fill} />
      </button>
      <p>{count}</p>
    </div>
  );
}

export default LikeButton;
