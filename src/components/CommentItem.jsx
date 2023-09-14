import { useContext } from "react";
import LikeButton from "../UI/LikeButton";
import { Context as commentContext } from "../context/Comment";
import classes from "./Comments.module.css";
function CommentItem({
  reply,
  id,
  commentId,
  img,
  user_name,
  comment,
  liked,
  like_count,
  replyToggle,
}) {
  const replyContainer = reply
    ? classes["container-reply"]
    : classes.comment_container;

  const { likeComment, removeComment, likeReply, removeReply } =
    useContext(commentContext);
  const likeHandler = () => {
    if (reply) likeReply({ parentId: commentId, replyId: id });
    else likeComment(id);
  };
  const removeHandler = () => {
    if (reply) removeReply({ parentId: commentId, replyId: id });
    else removeComment(id);
  };
  return (
    <div className={replyContainer}>
      <div>
        <img src={img} alt="" />
      </div>
      <div className={classes?.ml12}>
        <h3 className={classes?.title}>{user_name}</h3>
        <p className={classes?.comment_para}>{comment}</p>
        <div className={classes?.buttons}>
          <LikeButton
            liked={liked}
            count={like_count}
            type="submit"
            onClick={likeHandler}
          />
          <div className={classes.circle}></div>
          <div>
            {user_name === "John Doe" ? (
              <button className={classes.delete_btn} onClick={removeHandler}>
                Remove
              </button>
            ) : (
              <button
                className={classes.reply_btn}
                type="checkbox"
                onClick={replyToggle}
              >
                Reply
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
