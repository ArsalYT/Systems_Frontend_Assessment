import React, { useState } from "react";
// import classes from "./AddComment.module.css";
import InputWithIcon from "../UI/InputWithIcon";

function AddComment({ reply, onCommentAdd }) {
  console.log("IM REPLY:::", reply);
  const [comment, setComment] = useState("");

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (comment.trim().length === 0) return;

    const newComment = {
      id: Math.random(),
      img: "user4.png",
      user_name: "John Doe",
      comment: comment,
      liked: false,
      like_count: 0,
      replies: [],
    };

    if (reply) {
      delete newComment.replies;
    }

    onCommentAdd(newComment);
    setComment("");
  };
  return (
    <InputWithIcon
      onChange={onChangeHandler}
      onSubmit={submitHandler}
      value={comment}
    />
  );
}

export default AddComment;
