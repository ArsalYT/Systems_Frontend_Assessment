import { useContext, useState } from "react";
import { Context as commentContext } from "../context/Comment";
// CSS import.
import classes from "./Comments.module.css";
//Component Imports
import AddComment from "./AddComment";
import CommentItem from "./CommentItem";
import LikeButton from "../UI/LikeButton";

function Comments({ id, img, user_name, comment, replies, liked, like_count }) {
  const { likeComment, removeComment /*likeReply, */ } =
    useContext(commentContext);
  const [showInput, setInput] = useState(false);

  const replyToggle = () => {
    setInput((prev) => {
      return !prev;
    });
  };

  const likeCommentHandler = () => {
    likeComment(id);
  };
  const removeCommentHandler = () => {
    removeComment(id);
  };
  const likeReplyHandler = () => {};
  return (
    <li className={classes.container}>
      <CommentItem
        id={id}
        img={img}
        user_name={user_name}
        comment={comment}
        replyToggle={replyToggle}
        liked={liked}
        like_count={like_count}
      />

      {replies.length > 0 &&
        replies.map((reply) => (
          <CommentItem commentId={id} key={reply.id} reply {...reply} />
        ))}

      {showInput && <AddComment reply commentId={id} />}
    </li>
  );
}

export default Comments;
