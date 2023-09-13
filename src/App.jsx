import "./App.css";
import Card from "./UI/Card";
import CommentsList from "./components/CommentsList";
import AddComment from "./components/AddComment";
import { useState } from "react";
import { COMMENTS } from "./utils/DATA";

function App() {
  const [updated, setUpdated] = useState(COMMENTS);
  const commentHandler = (newComment) => {
    setUpdated((prevComments) => {
      return [...prevComments, newComment];
    });
  };

  return (
    <div className="container">
      <h6>Comments</h6>
      <CommentsList comments={updated} />
      <AddComment onCommentAdd={commentHandler} />
    </div>
  );
}

export default App;
