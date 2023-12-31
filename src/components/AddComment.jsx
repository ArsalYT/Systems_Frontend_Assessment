import { useState, useContext } from "react";
import { Context as commentContext } from "../context/Comment";
import classes from "./AddComment.module.css";
import InputWithIcon from "../UI/InputWithIcon";

function AddComment({ reply, commentId }) {
  const { addComment, addReply } = useContext(commentContext);
  const [comment, setComment] = useState("");

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (comment.trim().length === 0) return;

    const newComment = {
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
    if (reply) {
      addReply({ parentId: commentId, newReply: newComment });
    } else {
      addComment(newComment);
    }
    setComment("");
  };
  return (
    <div className={classes.container}>
      <InputWithIcon
        reply={reply}
        onChange={onChangeHandler}
        onSubmit={submitHandler}
        value={comment}
      />
    </div>
  );
}

export default AddComment;
