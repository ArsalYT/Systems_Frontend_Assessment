import { useContext } from "react";
import LikeButton from "../UI/LikeButton";
import { Context as commentContext } from "../context/Comment";
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
  const { likeComment, removeComment, likeReply, removeReply } =
    useContext(commentContext);
  const likeHandler = () => {
    if (reply) likeReply({ parentId: commentId, replyId: id });
    else likeComment(id);
  };
  const removeHandler = () => {
    if (reply) removeReply({ parentId: commentId, replyId: id });
    removeComment(id);
  };
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>{user_name}</div>
      <div>
        <p>{comment}</p>
      </div>
      <div>
        <LikeButton
          liked={liked}
          count={like_count}
          type="submit"
          onClick={likeHandler}
        />
        {/* <button type="">button1</button> */}
        {user_name === "John Doe" ? (
          <button onClick={removeHandler}>Remove</button>
        ) : (
          <button type="checkbox" onClick={replyToggle}>
            Reply
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentItem;
