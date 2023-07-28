"use client";

import classes from "./Button.module.scss";
import styled from "styled-components";
import { Fragment, forwardRef } from "react";
import Link from "next/link";

const Loader = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 1em;
  width: 5rem;
  background: blue;
  display: block;
`;

const Button = forwardRef(
  (
    {
      buttonType,
      isLink,
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
    const buttonClassName = [
      classes.Button,
      className ? className : null,
      buttonType ? classes["Button" + toCap(buttonType)] : null,
      isLoading ? classes.loading : null,
      isActive ? activeClassName || classes.active : null,
    ].join(" ");

    // Determine content
    let content;
    if (buttonType === "sliderPrev" || buttonType === "sliderNext") {
      content = (
        <Fragment>
          <span className={classes.arrow}>
            {buttonType === "sliderPrev" && (
              <span className={classes.arrowHead} />
            )}
            <span className={classes.arrowTail} />

            {buttonType === "sliderNext" && (
              <span className={classes.arrowHead} />
            )}
          </span>
        </Fragment>
      );
    } else if (buttonType === "underline") {
      content = <span className={classes.underline} />;
    }

    // Determine tag
    const Tag = isLink ? Link : "button";

    return (
      <Tag
        className={buttonClassName}
        href={otherProps.href}
        disabled={isDisabled}
        {...otherProps}
        ref={ref}
      >
        {content}
        {children && <span className={classes.children}>{children}</span>}
        {isLoading && <Loader className={classes.loader} />}
      </Tag>
    );
  }
);
Button.displayName = "Button";

export default Button;

function toCap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function scrollTo(el) {
  const top = el.getBoundingClientRect().top + window.scrollY;
  const height = el.getBoundingClientRect().height;
  const viewPortHeight = window.innerHeight;
  const centeringDistance = (viewPortHeight - height) / 2;

  window.scrollTo({
    top: top - centeringDistance,
    behavior: "smooth",
  });
}
