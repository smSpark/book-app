import React from "react";
import PropTypes from "prop-types";
import style from "./CustomInput.module.css";

function CustomInput({
  title,
  type,
  id,
  name,
  value,
  errors,
  onChange,
  placeholder,
}) {
  return (
    <div className={style.input_wrapper}>
      {title && (
        <label htmlFor={id} className={style.title}>
          {title} :
        </label>
      )}
      <input
        className={`${style.input} ${errors && style.input_error}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
      />
      <p className={`${style.errors} ${errors && style.errors_show}`}>
        {errors}
      </p>
    </div>
  );
}

CustomInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

CustomInput.defaultProps = {
  title: "",
  type: "text",
  value: null,
  errors: null,
  placeholder: "",
  onChange: () => {},
};

export default CustomInput;
