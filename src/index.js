import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as CommentsProvider } from "./context/Comment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommentsProvider>
    <App />
  </CommentsProvider>
);
