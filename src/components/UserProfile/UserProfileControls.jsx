import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

// STATE
import { useStateValue } from "../../state";

const UserProfileControlsStyles = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  padding: 10px 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 1001;
  .profile__control {
    outline: none;
    background: ${props => props.theme.default.lightGray};
    border: none;
    border-radius: 3px;
    color: white;
    padding: 10px;
    font-size: ${props => props.theme.default.baseFontSize};
    font-weight: 600;
  }
  .profile__control--cancel {
    background: none;
    border: none;
    border-radius: 3px;
    color: ${props => props.theme.default.black};
    padding: 10px;
    font-size: ${props => props.theme.default.baseFontSize};
    font-weight: 600;
  }
`;

function UserProfileControls({ history }) {
  const [, dispatch] = useStateValue();
  function save() {
    dispatch({
      type: "setLoading",
      loading: true
    });
    setTimeout(() => {
      dispatch({
        type: "confirmLogon"
      });
    }, 1000);
    setTimeout(() => {
      dispatch({
        type: "setLoading",
        loading: false
      });
      history.push("/");
    }, 3000);
  }
  return (
    <UserProfileControlsStyles>
      <button onClick={save} className="profile__control">
        Save Profile & Continue
      </button>
      <button
        onClick={save}
        className="profile__control profile__control--cancel"
      >
        Cancel
      </button>
    </UserProfileControlsStyles>
  );
}

export default withRouter(UserProfileControls);
