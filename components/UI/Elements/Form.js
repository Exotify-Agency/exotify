"use client";

import styled from "styled-components";

const FormElement = styled.form`
  display: grid;
  gap: var(--pd-limit-width);
`;

const RowElement = styled.div`
  display: grid;
  grid-column: 1 / -1;
`;

const Form = ({ children, ...otherProps }) => {
  return <FormElement {...otherProps}>{children}</FormElement>;
};

export const Row = ({ children, ...otherProps }) => {
  return <RowElement {...otherProps}>{children}</RowElement>;
};

export default Form;
