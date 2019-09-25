import styled from "styled-components";

const UserProfileStyles = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 75px 1fr;
  justify-items: start;
  position: "relative";
  .profile__title {
    color: ${props => props.theme.default.lightGray};
    font-weight: 600;
  }
  .profile__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .profile__back {
    color: ${props => props.theme.default.blue};
    font-size: ${props => props.theme.default.smallFontSize};
    margin-top: 15px;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 5px;
    white-space: nowrap;
    align-items: center;
    opacity: ${props => (props.firstLogon ? "0" : "1")};
    pointer-events: ${props => (props.firstLogon ? "none" : "all")};
  }
`;
export default UserProfileStyles;