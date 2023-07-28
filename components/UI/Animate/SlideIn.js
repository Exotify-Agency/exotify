"use client";

import { forwardRef } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  overflow: hidden;
  & > * {
    will-change: translate;
    transition: translate ${({ data }) => data.duration}s
      ${({ data }) => data.delay}s;
    translate: ${({ data }) => {
      if (data.isVisible) return "0 0";
      if (data.direction === "up") return "0 110%";
      if (data.direction === "down") return "0 -110%";
      if (data.direction === "left") return "110% 0";
      if (data.direction === "right") return "-110% 0";
    }};
  }
`;

const SlideIn = forwardRef(
  (
    {
      children,
      isVisible = true,
      direction = "up",
      duration = 1,
      delay = 0,
      instant,
      ...otherProps
    },
    ref
  ) => {
    if (instant) {
      delay = 0;
      duration = 0;
    }

    const data = {
      isVisible,
      direction,
      duration,
      delay,
    };

    if (children?.constructor === Array)
      throw Error("Slide in can only have one child component!");

    return (
      <Container ref={ref} data={data} {...otherProps}>
        {children}
      </Container>
    );
  }
);

SlideIn.displayName = "SlideIn";
export default SlideIn;
