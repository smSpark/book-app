import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import style from "./BookEditor.module.css";
import CustomInput from "../../componentsHelper/CustomInput/CustomInput";
import CustomButton from "../../componentsHelper/CustomButton/CustomButton";
import { useForm } from "../../hooks/useForm";
import { addBook } from "../../redux/books/action";
import { bookValidation } from "../../assets/js/validation";
import { resetEditor } from "../../redux/editor/action";
import { ReactComponent as CancelPic } from "../../assets/img/cancel.svg";
import { ReactComponent as SavePic } from "../../assets/img/disk.svg";
import { ESC_KEY } from "../../assets/js/constants";

const editorInputs = [
  {
    name: "book_title",
    title: "Наименование",
    id: "input__book-title",
    type: "text",
    placeholder: "JavaScript для чайников",
  },
  {
    name: "book_author",
    title: "Автор",
    id: "input__book-author",
    type: "text",
    placeholder: "Минник, Холланд",
  },
  {
    name: "book_date",
    title: "Год выпуска",
    id: "input__book-date",
    type: "text",
    placeholder: "2014",
  },
  {
    name: "book_img",
    title: "Изображение",
    id: "input__book-image",
    type: "text",
    placeholder: "http://placehold.it/100x150.jpg",
  },
];

function BookEditor({ toggleEditor }) {
  const editor = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const formHandleSubmit = (values) => {
    dispatch(addBook(values));
    toggleEditor();
  };

  const { values, errors, setValues, handleChange, handleSubmit } = useForm(
    formHandleSubmit,
    bookValidation
  );

  useEffect(() => {
    const closeEditor = (evt) => {
      if (evt.keyCode === ESC_KEY) {
        toggleEditor();
      }
    };

    setValues(editor);
    document.addEventListener("keydown", closeEditor);

    return () => {
      document.removeEventListener("keydown", closeEditor);
      dispatch(resetEditor());
    };
  }, [dispatch, editor, setValues, toggleEditor]);

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Редактирование книги</h2>
      <form onSubmit={handleSubmit}>
        {editorInputs.map((input) => (
          <CustomInput
            key={input.id}
            name={input.name}
            title={input.title}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            value={values[input.name] || ""}
            errors={errors[input.name] || ""}
            onChange={handleChange}
          />
        ))}
        <div className={style.buttons}>
          <CustomButton
            Icon={SavePic}
            type="submit"
            className={style.button_save}
          >
            Сохранить
          </CustomButton>
          <CustomButton
            Icon={CancelPic}
            type="button"
            className={style.button_cancel}
            onClick={toggleEditor}
          >
            Отменить
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

BookEditor.propTypes = {
  toggleEditor: PropTypes.func,
};

BookEditor.defaultProps = {
  toggleEditor: () => {},
};

export default BookEditor;
