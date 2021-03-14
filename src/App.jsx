import React, { useState } from 'react';
import style from "./App.module.css";
import BookList from "./components/BooksList/BookList";
import CustomButton from "./componentsHelper/CustomButton/CustomButton";
import { ReactComponent as Book } from "./assets/img/book.svg";
import { ReactComponent as Cancel } from "./assets/img/cancel.svg";

function App() {
  const [isEdit, isEditToggle] = useState(false);

  const toggleEditor = () => {
    isEditToggle(!isEdit);
  };

  return (
    <>
      <h1 className={style.title}>Книжная полка</h1>
      <CustomButton
        Icon={isEdit ? Cancel : Book}
        onClick={toggleEditor}
        className={`${style.main_button} ${isEdit && style.main_button_cancel}`}
      >
        {isEdit ? `Отменить` : `Добавить книгу`}
      </CustomButton>

      {isEdit ? (
        <div>fff</div> //<BookEditor toggleEditor={toggleEditor} />
      ) : (
        <BookList toggleEditor={toggleEditor} />
      )}
    </>
   );
}

export default App;
