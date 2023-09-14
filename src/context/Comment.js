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
      return state.map((comment) => {
        if (comment.id === action.payload) {
          return {
            ...comment,
            liked: !comment.liked,
            like_count: comment.liked
              ? comment.like_count - 1
              : comment.like_count + 1,
          };
        }
        return comment;
      });
    }

    case "add_reply": {
      const { parentId, newReply } = action.payload;
      const updatedState = state.map((comment) => {
        if (comment.id === parentId) {
          const updatedReplies = [...comment.replies, newReply];
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      return updatedState;
    }
    case "remove_reply": {
      const { parentId, replyId } = action.payload;
      const updatedState = state.map((comment) => {
        if (comment.id === parentId) {
          const updatedReplies = comment.replies.filter(
            (reply) => reply.id !== replyId
          );
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      return updatedState;
    }
    case "like_reply": {
      const { parentId, replyId } = action.payload;
      const updatedState = state.map((comment) => {
        if (comment.id === parentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return {
                ...reply,
                liked: !reply.liked,
                like_count: reply.liked
                  ? reply.like_count - 1
                  : reply.like_count + 1,
              };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      return updatedState;
    }
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
const addReply = (dispatch) => (parentId, newReply) => {
  dispatch({ type: "add_reply", payload: { parentId, newReply } });
};

const removeReply = (dispatch) => (parentId, replyId) => {
  dispatch({ type: "remove_reply", payload: { parentId, replyId } });
};

const likeReply = (dispatch) => (parentId, replyId) => {
  dispatch({ type: "like_reply", payload: { parentId, replyId } });
};

//exporting  reducer, actions and initial state.
export const { Provider, Context } = createDataContext(
  commentReducer,
  {
    addComment,
    removeComment,
    likeComment,
    addReply,
    removeReply,
    likeReply,
  },
  COMMENTS
);
