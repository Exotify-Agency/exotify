"use client";

import classes from "./Section.module.scss";

import { forwardRef } from "react";
import { styled } from "styled-components";

import Button from "@/components/UI/Elements/Button";

const StyledSection = styled.section`
  max-width: ${(props) => props.$limit};
  width: 100%;
  margin: 0 auto;
`;

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
      <StyledSection
        className={sectionClassName}
        id={sectionName}
        ref={ref}
        $limit={sectionLimit}
        {...otherProps}
      >
        {includeBack && (
          <Button className={classes.SectionBack} buttonType="text">
            <i className="bi bi-arrow-left" />
            back
          </Button>
        )}
        {children}
      </StyledSection>
    );
  }
);

Section.displayName = "Section";
export default Section;
