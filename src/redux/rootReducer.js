import { combineReducers } from "redux";
import books from "./books/reducer";
//import editor from "./editor/reducer";

export default combineReducers({
  books,
  //editor,
});
