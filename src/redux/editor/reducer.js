import { SET_EDITED_BOOK, RESET_EDITED_BOOK } from "./types";

const initialState = {
  id: Date.now(),
  book_title: "",
  book_img: "",
  book_author: "",
  book_date: "",
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDITED_BOOK:
      return { ...state, ...action.payload };
    case RESET_EDITED_BOOK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default editorReducer;
