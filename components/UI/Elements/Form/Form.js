import classes from "./Form.module.scss";

const Form = ({ children, ...otherProps }) => {
  return (
    <div className={classes.Form} {...otherProps}>
      {children}
    </div>
  );
};

export const Row = ({ children, ...otherProps }) => {
  return (
    <div className={classes.FormRow} {...otherProps}>
      {children}
    </div>
  );
};

export default Form;
