import classes from "./Button.module.scss";
import { forwardRef } from "react";
import Link from "next/link";
import { join } from "@/utils/helpers";

const Button = forwardRef(
  (
    {
      buttonType,
      isLink,
      isHashLink,
      isActive,
      isDisabled,
      isLoading,
      children,
      className,
      activeClassName,
      ...otherProps
    },
    ref
  ) => {
    // Add onFocus/onBlur if it doesn't exist mouseEnter/mouseLeave does
    if (otherProps.onMouseEnter && !otherProps.onFocus)
      otherProps.onFocus = otherProps.onMouseEnter;
    if (otherProps.onMouseLeave && !otherProps.onBlur)
      otherProps.onBlur = otherProps.onMouseLeave;

    // Determine className
    const buttonClassName = join(
      classes.Button,
      className ? className : null,
      buttonType ? classes["Button" + toCap(buttonType)] : null,
      isLoading ? classes.loading : null,
      isActive ? activeClassName || classes.active : null
    );

    // Determine content
    let content;
    if (buttonType === "dot") {
      content = <span className={classes.line} />;
    } else if (buttonType === "sliderNext" || buttonType === "sliderPrev") {
      content = (
        <>
          {buttonType === "sliderPrev" && (
            <span className={classes.arrowHead} />
          )}
          <span className={classes.arrowTail} />
          {buttonType === "sliderNext" && (
            <span className={classes.arrowHead} />
          )}
        </>
      );
    } else if (buttonType === "underline") {
      content = <span className={classes.underline} />;
    }

    // Determine tag
    const Tag = isLink || isHashLink ? Link : "button";

    return (
      <Tag
        className={buttonClassName}
        href={otherProps.href}
        disabled={isDisabled}
        replace={isHashLink ? true : otherProps.replace}
        {...otherProps}
        ref={ref}
      >
        {content}
        {children && <span className={classes.children}>{children}</span>}
        {isLoading && <span className={classes.loader} />}
      </Tag>
    );
  }
);
Button.displayName = "Button";

export default Button;

function toCap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
