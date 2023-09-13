import React from "react";
import Comments from "./Comments";

function CommentsList({ comments }) {
  return (
    <section>
      {comments.map((el) => (
        <Comments key={el.id} {...el} />
      ))}
    </section>
  );
}

export default CommentsList;
