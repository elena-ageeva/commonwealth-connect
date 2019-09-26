import styled from "styled-components";

const UserProfileSectionStyles = styled.div`
  background: ${props => (props.isActive ? "#006699" : "none")};
  transition: background ${props => (props.isActive ? "0ms" : "1000ms")} ease;
  &:first-child {
    margin-top: 30px;
  }
  margin-bottom: ${props => (props.expanded ? "40px" : "0px")};
  .show__label {
    color: ${props => props.theme.default.lightGray};
  }
  .user__profile__section__header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => (props.type !== "default" ? "5px" : "10px")};
    padding-right: 15px;
  }
  .user__profile__section__title {
    background: none;
    border: none;
    color: ${props => props.theme.default.black};
    font-size: ${props => props.theme.default.enormousFontSize};
    font-weight: 600;
    outline: none;
    padding: 0;
  }
  .profile__items {
    overflow: hidden;
    height: ${props => (props.expanded ? "auto" : "0px")};
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-gap: ${props => (props.type === "users" ? "0px" : "10px")};
  }

  .expand__icon {
    font-size: ${props => props.theme.default.largerFontSize};
    color: ${props => props.theme.default.lightGray};
    margin-left: 10px;
    transform: rotate(${props => (props.expanded ? "180deg" : "0deg")});
    transition: 200ms all ease-in-out;
  }
`;

export default UserProfileSectionStyles;
