import React, { useState } from "react";
import classes from "./Comments.module.css";
import AddComment from "./AddComment";
import CommentItem from "./CommentItem";

import LikeButton from "../UI/LikeButton";
function Comments({ img, user_name, comment, replies, liked, like_count }) {
  const [replied_Comments, setReplies] = useState(replies);
  const [count, setCount] = useState(like_count);
  const [like, setLike] = useState(liked);
  const [showInput, setInput] = useState(false);

  const replyHandler = () => {
    setInput((prev) => {
      return !prev;
    });
  };

  const countHandler = () => {
    if (like) setCount((c) => c - 1);
    else setCount((c) => c + 1);
    setLike((prev) => {
      return !prev;
    });
  };

  const newReplyHandler = (newReply) => {
    setReplies((prev) => [...prev, newReply]);
    setInput(false);
  };
  return (
    <li className={classes.container}>
      <CommentItem img={img} user_name={user_name} comment={comment} />
      <div className={classes.buttons}>
        <LikeButton count={count} type="submit" onClick={countHandler} />
        {/* <button type="">button1</button> */}
        {user_name === "John Doe" ? (
          <button>Remove</button>
        ) : (
          <button type="checkbox" onClick={replyHandler}>
            Reply
          </button>
        )}
      </div>

      {replied_Comments.length > 0 &&
        replied_Comments.map((reply) => (
          <CommentItem key={reply.id} {...reply} />
        ))}

      {showInput && <AddComment reply onCommentAdd={newReplyHandler} />}
    </li>
  );
}

export default Comments;
