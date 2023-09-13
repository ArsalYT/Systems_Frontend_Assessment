import React from "react";

function CommentItem(props) {
  return (
    <div>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>{props.user_name}</div>
      <div>
        <p>{props.comment}</p>
      </div>
    </div>
  );
}

export default CommentItem;
