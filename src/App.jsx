import React, { useState } from 'react';
import style from "./App.module.css";

function App() {
  const [isEdit, isEditToggle] = useState(false);

  return (
    <>
      <h1 className={style.title}>Книжная полка</h1>
      {/* <CustomButton
        Icon={isEdit ? Cancel : Book}
        onClick={toggleEditor}
        className={`${style.main_button} ${isEdit && style.main_button_cancel}`}
      >
        {isEdit ? `Отменить` : `Добавить книгу`}
      </CustomButton> */}

      {isEdit ? (
        <div>fff</div> //<BookEditor toggleEditor={toggleEditor} />
      ) : (
        <div className="">hhh</div>  //<BookList toggleEditor={toggleEditor} />
      )}
    </>
   );
}

export default App;
