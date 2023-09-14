import React, { useState } from "react";
import LikeIcon from "./LikeIcon"; // Import your heart icon component
import classes from "./LikeButton.module.css";

function LikeButton({ count, onClick, type, liked }) {
  const fill = liked ? "red" : "white";
  return (
    <>
      <p>{count}</p>
      <button
        className={
          liked ? classes["like-button-clicked"] : classes["like-button"]
        }
        type={type}
        onClick={onClick}
      >
        <LikeIcon fill={fill} />
        {/* Pass the style to the heart icon component */}
      </button>
    </>
  );
}

export default LikeButton;
