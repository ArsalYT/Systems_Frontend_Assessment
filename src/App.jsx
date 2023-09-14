//CSS Import
import "./App.css";
//Custom imports.
import CommentsList from "./components/CommentsList";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="container">
      <h6>Comments</h6>
      <CommentsList />
      <AddComment />
    </div>
  );
}

export default App;
