import styled from "styled-components";

const ProfileItemStyles = styled.div`
  background: ${props => (props.isActive ? "#006699" : "none")};
  transition: background ${props => (props.isActive ? "0ms" : "2000ms")} ease;
  padding-right: 15px;
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  grid-gap: 10px;
  border-radius: 3px;
  grid-template-columns: ${props =>
    props.type === "default" ? "190px 1fr auto" : "1fr"};
  font-size: ${props => props.theme.default.baseFontSize};
  margin-right: 15px;
  padding-left: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  .profile__item__label {
    margin-top: 2px;
    font-weight: 600;
    color: ${props => (props.isActive ? "#C4EBFF" : props.theme.default.black)};
    transition: color ${props => (props.isActive ? "0ms" : "2000ms")} ease;
  }
  .profile__item__value {
    margin-top: 2px;

    justify-self: start;
    color: ${props => (props.isActive ? "#C4EBFF" : props.theme.default.black)};
    transition: color ${props => (props.isActive ? "0ms" : "2000ms")} ease;
    width: 100%;
  }
  .toggle {
    justify-self: end;
    outline: none;
    border: none;
    border-radius: 11px;
    height: 22px;
    width: 44px;
    margin-top: 1px;
    background: ${props =>
      props.show ? props.theme.default.gray : props.theme.default.lightestGray};
    position: relative;
    transition: all 200ms ease;
    box-shadow: inset 0px 0px 5px
      ${props => (props.show ? "rgba(0,0,0,.4)" : "rgba(0,0,0,.2)")};
  }
  .toggle__indicator {
    box-shadow: 0px 0px 5px
      ${props => (props.show ? "rgba(0,0,0,.4)" : "rgba(0,0,0,.2)")};
    border-radius: 50%;
    position: absolute;
    right: 2px;
    top: 2px;
    background: ${props =>
      props.show ? "white" : props.theme.default.lightGray};
    height: 18px;
    width: 18px;
    transform: translate(${props => (props.show ? "0" : "-20px")});
    transition: all 200ms ease;
  }
  .user__list__item {
    color: ${props =>
      props.itemHidden === true
        ? props.theme.default.lightGray
        : props.theme.default.black};
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    white-space: nowrap;
    align-items: center;
  }
  .hidden__icon {
    margin-left: 10px;
    margin-right: 2.5px;
  }
  .hidden__flag {
    color: ${props => props.theme.default.lightGray};
    font-size: ${props => props.theme.default.smallFontSize};
  }
`;

export default ProfileItemStyles;
