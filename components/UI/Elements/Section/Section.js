"use client";

import classes from "./Section.module.scss";

import { forwardRef } from "react";

import Button from "@/components/UI/Elements/Button/Button";

const Section = forwardRef(
  (
    {
      className,
      name,
      limit = "110rem",
      children,
      limitWidth = false,
      includeBack = false,
      ...otherProps
    },
    ref
  ) => {
    const sectionClassName = [classes.Section, className].join(" ");
    const sectionName = "section-" + name;
    const sectionLimit = limitWidth ? limit : "none";
    return (
      <section
        className={sectionClassName}
        id={sectionName}
        ref={ref}
        style={{ maxWidth: sectionLimit }}
        {...otherProps}
      >
        {includeBack && (
          <Button className={classes.SectionBack} buttonType="text">
            <i className="bi bi-arrow-left" />
            back
          </Button>
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
