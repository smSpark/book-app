import { ADD_BOOK, REMOVE_BOOK } from "./types";

const initialState = [
  {
    id: "ID1",
    book_title: "JavaScript. Подробное руководство. 6-е издание",
    book_img:
      "https://cv9.litres.ru/pub/c/pdf-kniga/cover_415/24499998-devid-flenagan-javascript-podrobnoe-rukovodstvo-6-e-izdanie-24499998.jpg",
    // imgUrl: "https://zastavok.net/ts/risovannye-oboi/158348886245.jpg",
    book_author: "Дэвид Флэнаган",
    book_date: "2012",
  },
  {
    id: "ID2",
    book_title: "Javascript и jQuery. Интерактивная веб-разработка",
    book_img:
      "https://cv5.litres.ru/pub/c/pdf-kniga/cover_415/22964956-dzhon-dakett-javascript-i-jquery-interaktivnaya-veb-razrabotka.jpg",
    book_author: "Джон Дакетт",
    book_date: "2014",
  },
  {
    id: "ID3",
    book_title: "Выразительный JavaScript. Современное веб-программирование ",
    book_img:
      "https://cv6.litres.ru/pub/c/pdf-kniga/cover_415/50447564-mareyn-haverbeke-vyrazitelnyy-javascript-sovremennoe-veb-programm-50447564.jpg",
    book_author: "Марейн Хавербеке",
    book_date: "2019",
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        action.payload,
        ...state.filter((book) => book.id !== action.payload.id),
      ];
    // return state.map((book) => book.id !== action.payload.id ? book : action.payload);
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
};

export default booksReducer;
