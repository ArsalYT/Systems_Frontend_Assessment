import "./App.css";
import { Context as commentContext } from "./context/Comment";
import CommentsList from "./components/CommentsList";
import AddComment from "./components/AddComment";
import { useState, useContext, useEffect } from "react";
import { COMMENTS } from "./utils/DATA";

function App() {
  const [updated, setUpdated] = useState(COMMENTS);
  const commentHandler = (newComment) => {
    setUpdated((prevComments) => {
      return [...prevComments, newComment];
    });
  };
  const { state, addComment } = useContext(commentContext);
  console.log("COMMENTS:::", state[0]);
  useEffect(() => {
    addComment({
      id: 123,
      img: "user1.png",
      user_name: "Maria",
      comment:
        "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
      liked: false,
      like_count: 2,
      replies: [],
    });
  }, []);

  return (
    <div className="container">
      <h6>Comments</h6>
      <CommentsList comments={state} />
      <AddComment onCommentAdd={commentHandler} />
    </div>
  );
}

export default App;
