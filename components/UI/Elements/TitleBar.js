"use client";

import styled from "styled-components";

const TitleBarElement = styled.div`
  display: grid;
  gap: 0.5rem;
  justify-items: center;
  justify-content: center;
`;

const TitleBar = ({ children, ...otherProps }) => {
  return <TitleBarElement {...otherProps}>{children}</TitleBarElement>;
};

export default TitleBar;
