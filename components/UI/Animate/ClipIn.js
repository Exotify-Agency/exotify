"use client";

import { forwardRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  will-change: clip-path;
  transition: clip-path ${({ data }) => data.duration}s
    ${({ data }) => data.delay}s;
  clip-path: ${({ data }) => {
    if (data.isVisible) return "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)";
    if (data.direction === "up")
      return "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    if (data.direction === "down")
      return "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
    if (data.direction === "left")
      return "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)";
    if (data.direction === "right")
      return "polygon(0% 0%, 0% 0, 0% 100%, 0% 100%)";
  }};
`;

const ClipIn = forwardRef(
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
      isVisible: isVisible,
      direction: direction,
      duration: duration,
      delay: delay,
    };

    return (
      <Container data={data} {...otherProps} ref={ref}>
        {children}
      </Container>
    );
  }
);

ClipIn.displayName = "ClipIn";

export default ClipIn;
