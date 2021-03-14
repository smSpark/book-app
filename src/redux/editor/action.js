import { RESET_EDITED_BOOK, SET_EDITED_BOOK } from "./types";

export const resetEditor = () => ({
  type: RESET_EDITED_BOOK,
  payload: {
    id: Date.now(),
    book_title: "",
    book_img: "",
    book_author: "",
    book_date: "",
  },
});

export const setEditor = (book) => ({
  type: SET_EDITED_BOOK,
  payload: book,
});
