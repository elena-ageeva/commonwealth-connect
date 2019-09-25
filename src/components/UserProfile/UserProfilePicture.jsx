import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import photo from "../../assets/advisorPhotos/testAdvisorPhoto.png";

const UserProfilePictureStyles = styled.div`
  align-items: center;
  background: ${props => props.theme.default.darkGray};
  border-radius: 50%;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  transform: scale(${props => props.scale});
  width: 50px;
  .profile__picture__icon {
    color: white;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  .profile__picture__img {
    color: white;
    width: calc(100% + 2px);
  }
`;

export default function UserProfilePicture({ scale }) {
  return (
    <UserProfilePictureStyles
      scale={scale}
      className="profile__picture__wrapper"
    >
      <FontAwesomeIcon className="profile__picture__icon" icon={faUser} />
      {/* <img
        className="profile__picture__img"
        src="https://home.commonwealth.com/backoffice/RepPictures/269109301.jpg"
        alt=""
      /> */}
    </UserProfilePictureStyles>
  );
}
