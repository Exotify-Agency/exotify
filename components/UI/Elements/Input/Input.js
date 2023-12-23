import { forwardRef } from "react";

import classes from "./Input.module.scss";

const Input = forwardRef(
  (
    {
      type = "text",
      name,
      placeholder,
      isValid,
      hasError,
      inputClassName,
      minHeight,
      ...otherProps
    },
    ref
  ) => {
    const className = `
      ${classes.Input}
      ${classes["Input-" + type]}
      ${hasError ? classes.invalid : ""}
      ${inputClassName ? inputClassName : ""}
    `;

    const Tag = type === "textarea" ? "textarea" : "input";
    const styles =
      type === "textarea"
        ? { resize: "none", height: minHeight || "10rem" }
        : null;

    const inputElement = (
      <Tag
        id={"input-" + name}
        name={name}
        placeholder={placeholder}
        style={styles}
        {...otherProps}
        ref={ref}
      />
    );

    // ERRORS WILL BE ON EACH INPUT SEPARATELY
    return (
      <div className={className}>
        {inputElement}
        <label htmlFor={"input-" + name}>{placeholder}</label>
        <div className={classes.Error}>
          <div className={classes.ErrorInner}></div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
