import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 2rem;
`;

export default function StyledComponentDemo(props) {
  return <StyledButton myVariant={props.variant}>{props.text}</StyledButton>;
}
