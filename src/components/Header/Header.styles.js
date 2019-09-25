import styled from "styled-components";

const HeaderStyles = styled.header`
  align-items: center;
  background: ${props => props.theme.default.gray};
  color: white;
  display: flex;
  grid-template-columns: 1fr 2fr 1fr;
  height: ${props => props.theme.headerHeight};
  justify-content: space-between;
  padding: 0 20px;
  padding-right: 30px;
  .header__title {
    font-weight: bold;
    letter-spacing: 1px;
    font-size: ${props => props.theme.default.hugeFontSize};
  }
  .greeting {
    font-size: 1.3rem;
    font-weight: 600;
    justify-self: center;
  }
  nav {
    align-items: center;
    display: grid;
    grid-gap: 20px;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    justify-self: end;
  }

  a {
    color: white;
    font-size: 12px;
    text-decoration: none;
    white-space: nowrap;
  }

  .svg {
    position: fixed;
    top: 200px;
    left: 200px;
  }

  .active {
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }

  .profile__wrapper {
    align-items: center;
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;
    grid-template-columns: min-content 50px;
    height: 50px;
  }
  .profile__picture__wrapper {
    background: ${props => props.theme.default.darkGray};
    border-radius: 50%;
    display: flex;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
  }
  .profile__picture {
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
`;

export default HeaderStyles;
