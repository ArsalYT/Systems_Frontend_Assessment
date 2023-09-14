import { useContext } from "react";
import { Context as commentContext } from "../context/Comment";
import Comments from "./Comments";

//this compornt renders comments list.
function CommentsList({ comments }) {
  const { state } = useContext(commentContext);
  return (
    <section>
      {state.map((el) => (
        <Comments key={el.id} {...el} />
      ))}
    </section>
  );
}

export default CommentsList;
