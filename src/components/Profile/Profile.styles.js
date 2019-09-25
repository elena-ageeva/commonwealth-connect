import styled from "styled-components";
import Container from "react-bootstrap/Container";

const HomeStyles = styled(Container)`
  height: calc(100% - ${props => props.theme.headerHeight});
`;

export default HomeStyles;
