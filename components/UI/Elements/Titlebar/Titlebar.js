import classes from "./Titlebar.module.scss";

const Titlebar = ({ children, ...otherProps }) => {
  return (
    <div className={classes.Titlebar} {...otherProps}>
      {children}
    </div>
  );
};

export default Titlebar;
