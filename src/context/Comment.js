import createDataContext from "./createDataContext";
import { COMMENTS } from "../utils/DATA";

// this context handles state for all Comment.

// Reducer to handle dispatched Actions
const commentReducer = (state, action) => {
  switch (action.type) {
    case "add_comment":
      return [...state, action.payload];

    case "remove_comment":
      return state.filter((comment) => comment.id !== action.payload);

    case "like_comment": {
      let find = state.find((comment) => comment.id === action.payload);
      find = {
        ...find,
        liked: !find.liked,
        like_count: find.liked ? find.like_count - 1 : find.like_count + 1,
      };
      const filtered = state.filter((comment) => comment.id !== action.payload);
      return [...filtered, find];
    }

    case "add_reply":
      return { ...state, max_price: action.payload, page: 1 };

    default: {
      return state;
    }
  }
};
//Action to change State
const addComment = (dispatch) => (comment) => {
  dispatch({ type: "add_comment", payload: comment });
};

const removeComment = (dispatch) => (id) => {
  dispatch({ type: "remove_comment", payload: id });
};

const likeComment = (dispatch) => (id) => {
  dispatch({ type: "like_comment", payload: id });
};

//exporting  reducer, actions and initial state.
export const { Provider, Context } = createDataContext(
  commentReducer,
  {
    addComment,
    removeComment,
    likeComment,
  },
  COMMENTS
);
