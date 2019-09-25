import React from "react";
import styled from "styled-components";

import { Loader } from "../";

// STATE
import { useStateValue } from "../../state";

const FullLoaderStyles = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100000;
  transition: all 500ms ease;
  opacity: ${props => (props.appLoading ? "1" : "0")};
  pointer-events: ${props => (props.appLoading ? "all" : "none")};
`;

export default function FullLoader() {
  const [{ loading }] = useStateValue();
  return (
    <FullLoaderStyles appLoading={loading}>
      <Loader />
    </FullLoaderStyles>
  );
}
