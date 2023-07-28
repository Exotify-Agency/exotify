import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const changeHandler = (e) => setValue(e.target.value);
  const blurHandler = () => setIsTouched(true);
  const resetHandler = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    onChange: changeHandler,
    onBlur: blurHandler,
    onReset: resetHandler,
  };
};

export default useInput;
