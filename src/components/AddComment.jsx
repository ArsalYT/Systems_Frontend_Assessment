import React, { useState } from "react";
// import classes from "./AddComment.module.css";
import InputWithIcon from "../UI/InputWithIcon";
import { useContext } from "react";
import { Context as commentContext } from "../context/Comment";
function AddComment({ reply, onCommentAdd }) {
  const { state, addComment } = useContext(commentContext);
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

    addComment(newComment);
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
