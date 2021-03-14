/* eslint-disable import/prefer-default-export */
import { useState } from "react";

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const errorsValid = validate(values);

    if (!Object.keys(errorsValid).length) {
      callback(values);
      setValues({});
    } else {
      setErrors(errorsValid);
    }
  };

  const handleChange = (evt) => {
    evt.persist();
    setValues((value) => ({
      ...value,
      [evt.target.name]: evt.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors,
  };
};
