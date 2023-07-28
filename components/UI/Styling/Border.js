"use client";

import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  border-color: var(--c-gold);
`;

const sharedStyles = css`
  position: absolute;
  transition: width ${({ data }) => data.duration}s ${({ data }) => data.delay}s,
    height ${({ data }) => data.duration}s ${({ data }) => data.delay}s;
  border: ${({ data }) => (data.isShown ? data.thickness : "0rem")}
    ${({ data }) => data.borderStyle} transparent;
`;

const BorderTop = styled.span`
  ${sharedStyles}
  top: ${({ data }) => data.paddingTop || data.padding};
  left: 50%;
  transform: translateX(-50%);
  width: ${({ data }) =>
    data.isShown
      ? `calc(100% - 2 * ${data.paddingLeft || data.padding})`
      : "0"};
  border-top-color: inherit;
`;

const BorderBottom = styled.span`
  ${sharedStyles}
  bottom: ${({ data }) => data.paddingTop || data.padding};
  left: 50%;
  transform: translateX(-50%);
  width: ${({ data }) =>
    data.isShown
      ? `calc(100% - 2 * ${data.paddingLeft || data.padding})`
      : "0"};
  border-bottom-color: inherit;
`;

const BorderRight = styled.span`
  ${sharedStyles}
  right: ${({ data }) => data.paddingLeft || data.padding};
  top: 50%;
  transform: translateY(-50%);
  height: ${({ data }) =>
    data.isShown ? `calc(100% - 2 * ${data.paddingTop || data.padding})` : "0"};
  border-right-color: inherit;
`;

const BorderLeft = styled.span`
  ${sharedStyles}
  left: ${({ data }) => data.paddingLeft || data.padding};
  top: 50%;
  transform: translateY(-50%);
  height: ${({ data }) =>
    data.isShown ? `calc(100% - 2 * ${data.paddingTop || data.padding})` : "0"};
  border-left-color: inherit;
`;

const Border = forwardRef(
  (
    {
      children,
      isShown = true,
      padding = "var(--pd-limit-width)",
      paddingTop,
      paddingLeft,
      borderStyle = "solid",
      duration = 1,
      delay = 0,
      instant,
      ...otherProps
    },
    ref
  ) => {
    if (instant) {
      duration = 0;
      delay = 0;
    }
    const data = {
      isShown: isShown,
      duration: duration,
      delay: delay,
      padding: padding,
      paddingTop: paddingTop,
      paddingLeft: paddingLeft,
      borderStyle: borderStyle,
      thickness: borderStyle === "double" ? "0.3rem" : "0.1rem",
    };

    return (
      <Container {...otherProps} ref={ref}>
        {children}
        <BorderTop data={data} />
        <BorderRight data={data} />
        <BorderBottom data={data} />
        <BorderLeft data={data} />
      </Container>
    );
  }
);

Border.displayName = "Border";
export default Border;
