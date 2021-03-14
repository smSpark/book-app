/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import style from "./CustomButton.module.css";

function CustomButton({ children, className, type, onClick, Icon }) {
  return (
    <button
      type={type}
      className={`${style.button} ${className}`}
      onClick={onClick}
    >
      <Icon className={style.img} />
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.object.isRequired,
};

CustomButton.defaultProps = {
  type: "button",
  className: "",
  onClick: () => {},
};

export default CustomButton;
