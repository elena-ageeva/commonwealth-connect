import React from "react";
import loader from "../../assets/CFNlogotosvg.svg";

import LoaderStyles from "./Loader.styles";

export default function Loader({ message }) {
  return (
    <LoaderStyles>
      <img
        className="loader__image"
        src={
          process.env.NODE_ENV !== "production"
            ? loader
            : process.env.PUBLIC_URL +
              "/backoffice/intranet/CommonwealthConnect/CFNlogotosvg.svg"
        }
        alt=""
      />
      <span className="loader__message">{message}</span>
    </LoaderStyles>
  );
}
